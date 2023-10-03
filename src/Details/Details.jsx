

import { useLoaderData, useParams } from 'react-router-dom';
import Header from '../Home/Header';

const Details = () => {
    const courses=useLoaderData();
    const { id } = useParams();
    const course = courses?.find(item => item._id === id)
    return (
        <>
        <Header></Header>
            <div className=" text-start bg-green-200 px-16 py-12">
                <h1 className='text-2xl mb-3'> <span className='text-2xl font-bold'>Coures Content:</span>{course?.title}</h1>
               
                <p><span className='text-2xl font-bold'>Rating:</span> {course?.rating}</p>
               
                <div className="">
                    <h2><span className='text-2xl my-4 font-bold'>Syllabus:</span>{course?.syllabus}</h2>
                  
                </div>
                
                <div className="">
                    <h2><span className='text-2xl my-5 font-bold'>Reviews:</span>{course?.review}</h2>
                </div>
                <div className="">
                    <h2 className='text-2xl font-bold border-b-2'>Instructor Information:</h2>
                    <h3><span className='text-2xl my-5 font-bold'>Name:</span>{course.instructor.name}</h3>
                    <h3><span className='text-2xl  font-bold'>Bio:</span>{course.instructor.bio}</h3>
                    <ul><span className='text-2xl my-5  font-bold'>Bio:</span>{course.instructor.qualifications[0]}</ul>
                </div>
                <button className='btn mt-10 bg-orange-400'>Applay Now</button>
            </div>
        </>
    );
};

export default Details;