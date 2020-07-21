export const loginPersonil = (token, email, nama, id, nrp, jabatan, unit, submit, idUnit, idSubnit) => {
    localStorage.setItem('token', token)
    console.log(token, email, nama, id, nrp, jabatan, unit, submit)
    return (dispatch) => {
        dispatch({
        type: 'LOGIN',
            payload: {
                id: id,
                name: nama,
                email: email,
                nrp: nrp,
                jabatan: jabatan,
                unit: unit,
                subnit: submit,
                idUnit: idUnit,
                idSubnit: idSubnit
            }
        })
    }
}

export const dataAuth = (data) => {
    return (dispatch) => {
        dispatch({
        type: 'DATA_AUTH',
            payload: {
                id: data.id,
                name: data.nama,
                email: data.email,
                nrp: data.nrp,
                jabatan: data.jabatan,
                unit: data.unit,
                subnit: data.submit,
                idUnit: data.idUnit,
                idSubnit: data.idSubnit
            }
        })
    }
}

export const logOut = () => {
    localStorage.removeItem('token')
    return (dispatch) => {
        dispatch({
            type: "LOG_OUT"
        })
    }
}