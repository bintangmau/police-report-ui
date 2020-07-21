export const loginPersonil = (token, email, nama, id, nrp, jabatan, unit, submit) => {
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
                subnit: submit
            }
        })
    }
}

export const dataAuth = (data) => {
    return (dispatch) => {
        dispatch({
        type: 'LOGIN',
            payload: {
                id: data.id,
                name: data.nama,
                email: data.email,
                nrp: data.nrp,
                jabatan: data.jabatan,
                unit: data.unit,
                subnit: data.submit
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