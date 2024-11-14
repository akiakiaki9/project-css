import React from 'react'
import BRANDS from '@/app/utils/brands'

export default function BrandsComp() {
    return (
        <div className='brands'>
            <div className="brands-blok">
                <div className="brands-blok__section">
                    {BRANDS.map(brand => (
                        <div key={brand.id}>
                            <img src={brand.image} alt={`Brand ${brand.id}`} />
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};