import React from 'react';
import style from 'styled-components';

const DIV = style.div`
margin: 3%;
`

const UserCard = ({ followers }) => {
    
    // console.log(login)


    return(
        <div>      
            {followers.map(follower => {
                return(
                    <DIV>
                        {follower.login}
                        {follower.id}
                      </DIV>
                )
            })}
        </div>
    )

}

export default UserCard;