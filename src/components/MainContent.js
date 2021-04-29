import React, { useReducer } from "react";
import FormContainer from "./FormContainer";
import DisplayCv from "./DisplayCv";
import "../styles/Input.css";
import "../styles/Form.css"
import "../styles/DisplayCv.css"

const MainContent = () => {

    const [data, onUpdate] = useReducer(
        (state, newState) => ({ ...state, ...newState }),
        {
            avatar: "",
            name: "",
            email: "",
            phone: "",
            web: "",
            generalColumn: false,

            studies: [],
            educationColumns: 3,

            works: [],

            skills: [],
            round: false,

            langs: [],

            extraInfo: [],

            webs: []
        }
    );

    const setValues = event => {
        if (typeof (event) === "object") {
            if(event != undefined) {
                switch(Object.keys(event)[0]) {
                    case "generalColumn":
                        event.generalColumn ? onUpdate({ ["generalColumn"]: true }) : onUpdate({ ["generalColumn"]: false })
                        break;
                    case "round":
                        event.round ? onUpdate({ ["round"]: true }) : onUpdate({ ["round"]: false })
                        break;
                    case "skills":
                        onUpdate({ ["skills"]: event.skills });
                        break;
                    case "studies":
                        onUpdate({ ["studies"]: event.studies });
                        break;
                    case "works":
                        onUpdate({ ["works"]: event.works });
                        break;
                    case "langs":
                        onUpdate({ ["langs"]: event.langs });
                        break;
                    case "extraInfo":
                        onUpdate({ ["extraInfo"]: event.extraInfo });
                        break;
                    case "webs":
                        onUpdate({ ["webs"]: event.webs });
                        break;
                }
            }
        }

        if (event.educationColumns) {
            onUpdate({ ["educationColumns"]: event.educationColumns })
        }
        
        if (event.target != undefined) {
            const name = event.target.name;
            let newValue = event.target.value;
            if (event.target.name === "avatar") {
                newValue = URL.createObjectURL(event.target.files[0])
            }
            onUpdate({ [name]: newValue });
        }
    };

    return (
        <div id="container">
            <FormContainer
                setValues={setValues}
                data={data} />
            <DisplayCv data={data} />
        </div>
    )

}


export default MainContent;