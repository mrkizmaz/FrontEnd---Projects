import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import Loader from "../components/Loader"
import Error from "../components/Error"
import nullCheck from "../utils/nullCheck"

import ReactPaginate from 'react-paginate';
import 'react-paginate/theme/basic/react-paginate.css'; // Optional CSS

const List = ({ setDetailId }) => {

    const { isLoading, error, flights } = useSelector((store) => store.flight);

    // görüntülenecek ilk elemanin dizideki sirasi
    const [start, setStart] = useState(0);

    // sayfa basina gösterilecek eleman sayisi
    const perPage = 10;

    // görüntülenecek son elemanin dizideki sirasi
    const end = start + perPage;

    // baslangic ve bitis arasini al
    const currFlights = flights.slice(start, end);

    // sayfa sayini belirle
    const totalPage = Math.ceil(flights.length / perPage);

    // sayfa degistiginde state'i güncelle
    const handleChange = (event) => {
        // secili olan sayfanin degerini bul
        // console.log(event);

        setStart(event.selected * perPage);
    }

    // console.log(start, end)

    // if (isLoading) return <div><Loader /></div>
    // if (error) return <div><Error err={error} /></div>

    return (
        <div className='p-3 p-md-4'>
            <table className='table table-dark table-striped table-hover table-responsive mt-5'>
                <thead>
                    <tr>
                        <th>id</th>
                        <th>Kuyruk Kodu</th>
                        <th>Enlem</th>
                        <th>Boylam</th>
                        <th>Derece</th>
                        <th>Detay</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        isLoading ? <Loader /> : error ? <Error err={error} /> :

                            currFlights.map((flight, id) => (
                                <tr key={id}>
                                    <td>{flight.id}</td>
                                    <td>{nullCheck(flight?.code)}</td>
                                    <td>{flight.lat}</td>
                                    <td>{flight.lng}</td>
                                    <td>{flight.deg}</td>
                                    <td>
                                        <button onClick={() => setDetailId(flight.id)}>Detay</button>
                                    </td>
                                </tr>
                            )
                            )
                    }
                </tbody>
            </table>

            <ReactPaginate.default
                className="pagination"
                breakLabel="..."
                nextLabel="next >"
                onPageChange={handleChange}
                pageRangeDisplayed={5}
                pageCount={totalPage}
                previousLabel="< previous"
                renderOnZeroPageCount={null}
            />

        </div>
    )
}

export default List