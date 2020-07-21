// MODULES
import React, { useEffect } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import io from 'socket.io-client'
import { useSelector } from 'react-redux'

// API
import { api } from '../../helper/database'

function Notification(){
        // REDUX
        const jabatanState = useSelector(state=>state.user.jabatan) 
        const idUnit = useSelector(state => state.user.idUnit)
        const idSubnit = useSelector(state => state.user.idSubnit)

        const style = {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
        }
        const notify = () => toast(`🦄 ${jabatanState}`, style);

        const inputLaporanANotif = () => toast("Laporan baru telah masuk", style)
        const disposisiKanitNotif = () => toast("Disposisi dari Wakasat telah masuk", style)
        const disposisiKasubnitNotif = () => toast("Disposisi dari Kanit telah masuk", style)

        useEffect(() => {
            if (jabatanState ) {
                const socket = io(`${api}`)
                socket.on('input-report-a', data => {
                    if(jabatanState === "WAKASAT") {
                        inputLaporanANotif()
                    }
                })
                socket.on('input-report-b', data => {
                    if(jabatanState === "WAKASAT") {
                        inputLaporanANotif()
                    }
                })
                socket.on('update-status-disposisi-unit', data => {
                    // console.log(idUnit)
                    // console.log(data.idUnitOrSubnit)
                    if(jabatanState === "KANIT" && idUnit == data.idUnitOrSubnit) {
                        disposisiKanitNotif()
                    }
                })
                socket.on('update-status-disposisi-b-unit', data => {
                    // console.log(idUnit)
                    // console.log(data.idUnitOrSubnit)
                    if(jabatanState === "KANIT" && idUnit == data.idUnitOrSubnit) {
                        disposisiKanitNotif()
                    }
                })
                socket.on('update-status-disposisi-subnit', data => {
                    if(jabatanState === "KASUBNIT" && idSubnit == data.idUnitOrSubnit) {
                        disposisiKasubnitNotif()
                    }
                })

            }
        },[jabatanState])

return (
    <div>
        <ToastContainer />
    </div>
);
}

export default Notification;
