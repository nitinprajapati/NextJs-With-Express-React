import React from 'react';
import { useRouter } from 'next/router';

const ImageDetail = () => {
    const router = useRouter();
    const { slug } = router.query;
    console.log(router);
    return(
        <div className="container">
            <img alt="Detail description" src={router.query.url} />
        </div>
    )
};

export default ImageDetail;
