
import React, { useEffect, useState } from 'react'

function Users() {
    const [data, setdata] = useState([])
    const[mode, setmode]=useState('online')
    useEffect(() => {
        fetch("http://jsonplaceholder.typicode.com/users").then((result) => {
            result.json().then((resp) => {
                setdata(resp)
                localStorage.setItem("users",JSON.stringify(result))
            })
        })
        .catch(er=>{
            let collection =localStorage.getItem("users")
            setdata(JSON.parse(collection))
            setmode('offline')
        })
    }, [])
    return (
        <div>
          <div>
            {
                mode==='offline' ?
                <div>you are in offline mode</div>
                :null
            }
          </div>
            <table className='table table-active table-danger table-stripped '>
                <tr>
                    <td>Sr. No.</td>
                    <td>Name</td>
                    <td>Email</td>
                    <td>Phone No.</td>
                </tr>
                {
                    data.map((item, i) =>
                        <tr key={i}>
                            <td>{item.id}</td>
                            <td>{item.name}</td>
                            <td>{item.email}</td>
                            <td>{item.phone}</td>
                        </tr>
                    )
                }
            </table>
        </div>
    )
}

export default Users