import React from "react";

import ApprovalCard from "./ApprovalCard";
import CommentDetail from "./CommentDetail";
import UserPreview from "./UserPreview";



//Callback Function to loop through and create user info containers
const userContainerLoop = (results , handleSelectingPerson) => {
    
    return (
        <div>
        {results.map(( person , i ) => {
            console.log(person)
            return(
                <ApprovalCard key={i}>
                    
                        <UserPreview 
                            avatar={person.picture.thumbnail}
                            firstName={person.name.first} 
                            lastName={person.name.last} 
                            age={person.dob.age} 
                            person={person}
                            handleSelectingPerson={handleSelectingPerson}
                        />
            
                </ApprovalCard>
        )})
    }
    </div>
    )
}


const PersonalInfoContainer = ({ dataArray , handleSelectingPerson })=> {
    console.log('here')
    console.log(dataArray)
    return (
        <div>
            {userContainerLoop(dataArray , handleSelectingPerson)}
        </div>
    );
};

export default PersonalInfoContainer;