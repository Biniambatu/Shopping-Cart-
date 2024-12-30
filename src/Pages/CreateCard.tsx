import { addDoc, collection } from "firebase/firestore";
import { db, auth } from "../firebase/config";



const CreateCard = () => {
  
  const postRef = collection(db, "posts")

  async function handelSubmit(event){
    event.preventDefault();
    const document = {
        name: event.target.name.value,
        price: event.target.price.value,
        auther : {
            name: auth.currentUser?.displayName,
            id: auth.currentUser?.uid
        }
    }
    await addDoc(postRef, document)
  }

  return (
    <section className="create">
    <div className="heading">
       <h1>Add New Cart</h1>
    </div>
    <form onSubmit={handelSubmit}>
       <input type="text" className="title" name="name" placeholder="name" maxLength='50' required/>
       <input  type="number" className="description" name="price" placeholder="price" maxLength='600' required />
       {/* <textarea  type="text" className="description" name="image" placeholder="Description" maxLength='600' required ></textarea> */}
       <button type="submit" className="submit">Create </button>
    </form>
  </section>
  )
}

export default CreateCard