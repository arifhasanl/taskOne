import { useEffect, useState } from "react";
import Rating from "react-rating";
import { Link, useLoaderData } from "react-router-dom";



const Category = () => {
    const [searchTerm, setSearchTerm] = useState('');
    const [selectedCategory, setSelectedCategory] = useState('All');
    const [filteredCourses, setFilteredCourses] = useState([]);
    const courses=useLoaderData()
    useEffect(() => {
        // Filter courses based on search term and selected category
        const filtered = courses?.filter(course =>
            (course.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                course.instructor.toLowerCase().includes(searchTerm.toLowerCase())) &&
            (selectedCategory === 'All' || course.category === selectedCategory)
        );
        setFilteredCourses(filtered);
    }, [searchTerm, selectedCategory]);

    return (
        <div>
            <div className="my-12">
                <h1 className="text-3xl mb-10 font-bold text-orange-400">Course Catalog</h1>
                <input 
                    className="border px-3 py-2 mr-10"
                    type="text"
                    placeholder="Search courses"
                    value={searchTerm}
                    onChange={e => setSearchTerm(e.target.value)}
                />
                <select
                     className="border px-3 py-2"
                    value={selectedCategory}
                    onChange={e => setSelectedCategory(e.target.value)}
                >
                    <option value="All">All Categories</option>
                    <option value="Programming">Programming</option>
                    <option value="Design">Design</option>
                    <option value="Marn Stack Devloper">Marn Stack Devoloper</option>
                    <option value="Full Stack Devoloper">Full Stack Devoloper</option>
                    {/* Add more categories here */}
                </select>
            </div>

            <div className="grid grid-cols-2 gap-10 ">
                {filteredCourses.map(course => (
                    <div key={course.id} className="border border-4 bg-green-200 text-start p-6">
                        <h2 className="text-2xl "><span className="text-3xl font-bold my-3">CourseName:</span>{course.name}</h2>
                        <p><span className="text-2xl font-bold">Category:</span> {course.category}</p>
                        <p><span className="text-2xl font-bold">Instructore:</span> {course.instructor.name}</p>
                        <div className="flex justify-between">
                            <p><span className="text-2xl font-bold">Rating:</span> {course.rating}</p>
                            <span><Rating></Rating></span>
                        </div>
                        <button className="btn btn-outline flex justify-end bg-orange-500 mt-10"><Link to={`/details/${course._id}`}>Details</Link></button>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Category;