import React, { createContext, useState, useContext  } from 'react'

const FormContext = createContext();

export const useFormData = () => useContext(FormContext);

export const FormProvider = ({children}) => {
    const [data, setData] = useState({
        companyName:"",
        country:"",
        city:"",
        industry:"",
        purpose:"",
        groupSize:"",
        startDate:"",
        endDate:"",
        budget:"",
        transportation:"",
        accommodation:"",
        premium:"",
        other:"",
        otherRequest:"",
        comment:"",
        name:"",
        role:"",
        hours:"",
        communication:"",
    })
    const updateField =(field, value)=>{
        setData(prev=>({...prev,[field]: value}));
    }
    return(
        <FormContext.Provider value={{data,updateField}}>
            {children}
        </FormContext.Provider>
    )
}
