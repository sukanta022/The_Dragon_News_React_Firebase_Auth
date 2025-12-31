
import React, { use } from 'react';
import { NavLink } from 'react-router';

const categoryPromise = fetch('/category.json').then(res => res.json())
const Categories = () => {
    const categories = use(categoryPromise)
    return (
        <div>
            <p className='font-bold text-xl mb-5 text-center'>All categories ({categories.length})</p>
            
            <div className='grid grid-cols-1 gap-3'>
                {
                    categories.map((category => <NavLink
                            key={category.id}
                            to={`/category/${category.id}`}
                            className={"btn bg-white border-0 hover:bg-[#E7E7E7]/70 font-semibold"}>
                                {category.name}
                        </NavLink>
                    ))
                }
            </div>
        </div>
    );
};

export default Categories;