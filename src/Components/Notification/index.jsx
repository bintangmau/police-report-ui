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
        const idPenyidik = useSelector(state => state.user.id)

        const style = {
            position: "top-right",
            autoClose: 12000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
        }
        const notify = () => toast.success(`🦄 ${jabatanState}`, style);

        const inputLaporanANotif = () => toast.info("Laporan baru telah masuk", style)
        const disposisiKanitNotif = () => toast.info("Disposisi dari Wakasat telah masuk", style)
        const disposisiKasubnitNotif = () => toast.info("Disposisi dari Kanit telah masuk", style)
        const disposisiPenyidikNotif = () => toast.info("Disposisi dari Kasubnit telah masuk", style)

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
                    if(jabatanState === "KANIT" && idUnit === data.idUnitOrSubnit) {
                        disposisiKanitNotif()
                    }
                })
                socket.on('update-status-disposisi-b-unit', data => {
                    if(jabatanState === "KANIT" && idUnit == data.idUnitOrSubnit) {
                        disposisiKanitNotif()
                    }
                })
                socket.on('update-status-disposisi-subnit', data => {
                    if(jabatanState === "KASUBNIT" && idSubnit == data.idUnitOrSubnit) {
                        disposisiKasubnitNotif()
                    }
                })
                socket.on('update-status-disposisi-b-subnit', data => {
                    if(jabatanState === "KASUBNIT" && idSubnit === data.idUnitOrSubnit) {
                        disposisiKasubnitNotif()
                    }
                })
                socket.on('update-status-disposisi-penyidik', data => {
                    data.idUnitOrSubnit.forEach((val) => {
                        if(jabatanState === "PENYIDIK" && idPenyidik === val) {
                            disposisiPenyidikNotif()
                        }
                    })
                })
                socket.on('update-status-disposisi-b-penyidik', data => {
                    // console.log(data.idUnitOrSubnit)
                    data.idUnitOrSubnit.forEach((val) => {
                        if(jabatanState === "PENYIDIK" && idPenyidik === val) {
                            disposisiPenyidikNotif()
                        }
                    })
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
