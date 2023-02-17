import {useState} from 'react';

function Textarea(){

    const [text, settext]=useState('');
    let mouseout='';
    let word=''

    const handletext=(event)=>{
        settext(event.target.value)
    }

    const upcasefunc =()=>{
        settext(text.toUpperCase());
    }

    const locasefunc=()=>{
        settext(text.toLowerCase());

    }

    const mouseOut=(event)=>{
        mouseout = event.target.value;
    }

    const replaceword=(event)=>{
        word=event.target.value;
    }

    const replace=()=>{
        settext(text.replaceAll(mouseout,word))
    }
    return(
        <>
            <div className="form-floating mx-5 my-3">
                <h1 >Enter Your Text to Analyise</h1>
                <textarea className="form-control " placeholder="Leave a comment here" value={text} onChange={handletext} id="floatingTextarea2" style={{height: "300px"}}></textarea>
            </div>
            <button type="button" className="btn btn-dark my-2 mx-2" onClick={upcasefunc}>change to upper case</button>
            <button type="button" className="btn btn-dark my-2 mx-2" onClick={locasefunc}>change to upper case</button>

            <h3>
                Total Words : {text.split(' ').length} <br></br>Total Characters : {text.length}
            </h3>
            <br></br>
            
            <h3>Enter words to replace</h3>
            <input type={text} placeholder={"word you want to replace"} onChange={mouseOut} className="mx-3 darkmode" ></input>
            <input type={text} placeholder={"the word"} onKeyUp={replaceword}></input>
            <button onClick={replace}>Replace</button>

        </>
    )
}

export default Textarea;