// Importing Styling
import Style from './AddToContact.module.css'

// Importing context from CntactAPI
import { useValue } from '../../context';
// Importing some of the dependencies in the react-router-dom
import { useNavigate } from 'react-router-dom';
// Importing Toast messages
import {toast} from 'react-toastify';
import { UilGithubAlt,UilLinkedinAlt,UilTwitterAlt, UilBagAlt } from '@iconscout/react-unicons';
// function of the AddToContact
function AddToContact() {
    // Importing all the dependencies from the context(State management Library)
    const {contactList, 
        setContactList ,
         nameRef, 
         emailRef, 
         numberRef, 
         handleClear} = useValue();
    // use for navigating to the home page, after the sbumit is clicked
    const navigate = useNavigate();

//    submit functino, it will be fired when submit button is clicked
    const handleSubmit = (e)=>{
        e.preventDefault();
        // assigning values to the name form the nameRef
        const name = nameRef.current.value;
        const email = emailRef.current.value;
        const number = numberRef.current.value;
        // Checking if rhe numbeer is already present or not
        const checkNumber = contactList.find(contact => contact.number === parseInt(number) && number)

        if(checkNumber){
            return toast.warning("Data not Changed !");
        }
        
        const newContactList = [...contactList];
        newContactList.push({
            id: contactList[contactList.length - 1].id + 1,
            name ,
            email ,
            phone : number
        });
        toast.success("New Contact added !");
        setContactList(newContactList);
        navigate('/');
        // console.log(nameRef.current.value);
        handleClear();

    }


    return (
        <>
            <div className={Style.container}>
                <h1>Add To Contact</h1>
                <form onSubmit={handleSubmit}>
                    <input type="text" placeholder="Name" ref={nameRef} required  /> <br />
                    <input type="email" placeholder="Email" ref={emailRef} required  /> <br />
                    <input type="tel" placeholder="Number" ref={numberRef} required /> <br />
                    <button>Submit</button>
                </form>
            </div>
             <footer className="py-4 bg-gray-900 absolute bottom-0 w-full">
        <h2 className="text-center text-xl font-bold text-gray-400 mb-2">Contact Me</h2>
        <div className="flex justify-center space-x-4">
          <a href="https://github.com/iamshivanshyadav" target="_blank" rel="noopener noreferrer">
            <UilGithubAlt className="text-gray-300 hover:text-purple-300" size="24" />
          </a>
          <a href="https://www.linkedin.com/in/shivanshyadav27/" target="_blank" rel="noopener noreferrer">
            <UilLinkedinAlt className="text-gray-300 hover:text-purple-300" size="24" />
          </a>
          <a href="https://twitter.com/shivaayshivansh" target="_blank" rel="noopener noreferrer">
            <UilTwitterAlt className="text-gray-300 hover:text-purple-300" size="24" />
          </a>
          <a href="https://shivaay-portfolio.netlify.app/" target="_blank" rel="noopener noreferrer">
            <UilBagAlt className="text-gray-300 hover:text-purple-300" size="24" />
          </a>
        </div>
        <p className="text-center mt-2 text-sm text-gray-400">
          Developed by Shivansh Yadav
        </p>
      </footer>
        </>
    )
}

export default AddToContact;