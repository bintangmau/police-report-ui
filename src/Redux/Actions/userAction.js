export const loginPersonil = (token, email, nama, id, nrp, jabatan, unit, submit) => {
    localStorage.setItem('token', token)
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

// export const dataAuth = () => {
    
// }