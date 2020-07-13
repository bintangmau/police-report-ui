export const loginPersonil = (token, email, nama, id, nrp) => {
    localStorage.setItem('token', token)
    return (dispatch) => {
        dispatch({
        type: 'LOGIN',
            payload: {
                id: id,
                name: nama,
                email: email,
                nrp: nrp 
            }
        })
    }
}