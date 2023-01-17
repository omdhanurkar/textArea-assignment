import React from 'react'



const Page = () => {

    const [text, newtext] = React.useState("")

    const handleUpperCase = () => {
        let upperText = text.toUpperCase()
        newtext(upperText)
    }

    const onchangehandler = (event) => {
        newtext(event.target.value)
    }

    const resetInputField = () => {
        newtext("");
    };
    return (
        <div className='page'>
            <div className='page_container'>
                <form className='home_form' rows="5" cols="40">
                    <div className='box'>
                        <textarea placeholder='Please type here' id="page_box" value={text} onChange={onchangehandler} />
                    </div>
                    <div className='button' >
                        <button type="button" className='submit_btn' onClick={handleUpperCase} >convert to uppercase</button>
                        <button type="button" className='submit_btn' onClick={resetInputField} >reset input</button>

                    </div>
                </form>

            </div>

        </div>
    )
}

export default Page