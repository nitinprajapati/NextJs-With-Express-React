import React, {PureComponent} from 'react';
import { Table } from 'react-bootstrap';
import fetch from 'isomorphic-unfetch';
import 'bootstrap/dist/css/bootstrap.css';
import Link from 'next/link';

class ImageList extends PureComponent {

    static async getInitialProps() {
        const res = await fetch('https://jsonplaceholder.typicode.com/photos');
        const json = await res.json();
        return {
            plp : [...json.splice(0, 100)]
        }
    }

    render (){
        const plp = this.props.plp;
        return(
            <Table className="container table-striped  mt-5">
                <thead className="thead-dark">
                    <tr>
                        <th>Id</th>
                        <th>Title</th>
                        <th>Thumbnail</th>
                    </tr>
                </thead>
                <tbody>
                    {console.log(this.props)}
                    {plp.map((pl) => {
                        return (
                            <tr key={pl.id}>
                                <td>{pl.id}</td>
                                <td>{pl.title}</td>
                                <td>
                                    <Link href={{pathname: '/productImage', query: {url: pl.url}}} as="/productImage">
                                        <img src={pl.thumbnailUrl} alt={pl.title} /> 
                                    </Link>
                                </td>
                            </tr>
                        )
                    })} 
                </tbody>
            </Table>
        );
    }
};

export default ImageList;
