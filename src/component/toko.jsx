import { useParams } from "react-router-dom";
import semuakelas from '../index'
import Header from './header.jsx';

const Toko = () => {
    const { id } = useParams();

    const kelas = semuakelas.find(kelas => kelas.id === parseInt(id)) // You might not need parseInt here, but just in case.

    return (
        <>
        <Header />
        <div className="gambar">
           <img  style={{ height: '18rem', width: '18rem' }} src={kelas.image} alt="" />
     </div>
        <div className="title">
           {kelas.title}
     </div>
     <div className="harga">
           {kelas.price}
     </div>
     </>
    );
}
export default Toko;