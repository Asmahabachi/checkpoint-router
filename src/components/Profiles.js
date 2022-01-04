import React from 'react'
import Card from './CardUser'
function Profiles({Liste,match}) {
    return (
        <div className="profile">
            <h1>Profiles</h1>
            {Liste.map((x,key) => <Card key={key} usersList={x}/>)}
        </div>
    )
}

export default Profiles