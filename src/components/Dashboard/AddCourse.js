import React from 'react'
import { useForm } from 'react-hook-form';

const AddCourse = () => {
    const { register, handleSubmit, reset } = useForm();
    const onSubmit = formData => {

        const { courseName, courseCover, courseDescription, courseAuthor, courseItems, courseContents } = formData;
        if (!courseName || !courseCover || !courseDescription || !courseAuthor || !courseItems || !courseContents) {
            alert('Please fill all the fields before submitting')
            return;
        }
        const payload = {
            courseName,
            courseCover,
            courseRating: 0,
            courseDescription,
            courseAuthor,
            courseItems: courseItems.split(','),
            courseContents: courseContents.split(',')
        }
        console.log(payload);
        reset();
    };
    return (
        <div className='border px-20 my-5 shadow-md'>
            <form className="my-5 text-lg" onSubmit={handleSubmit(onSubmit)}>
                <h1 className='text-center mb-2 text-3xl font-bold'>Add new course</h1>
                <div className="flex my-2">
                    <label htmlFor="courseName" className='w-56 text-right pr-5'>Course Name:</label>
                    <input
                        {...register("courseName")}
                        type="text"
                        className='grow border-1 rounded border-gray-500 px-2'
                        id="courseName"
                        required
                    />
                </div>
                <div className="flex my-2">
                    <label htmlFor="courseCover" className='w-56 text-right pr-5'>Course Cover Image:</label>
                    <input
                        {...register("courseCover")}
                        type="text"
                        className='grow border-1 rounded border-gray-500 px-2'
                        id="courseCover"
                        required
                    />
                </div>
                <div className="flex my-2">
                    <label htmlFor="courseDescription" className='w-56 text-right pr-5'>Course Description:</label>
                    <textarea
                        {...register("courseDescription")}
                        rows={3}
                        id="courseDescription"
                        className="grow border-1 rounded border-gray-500 px-2"
                        placeholder='Describe the course details ...'
                        required
                    />
                </div>
                <div className="flex my-2">
                    <label htmlFor="courseAuthor" className='w-56 text-right pr-5'>Course Author:</label>
                    <input
                        {...register("courseAuthor")}
                        type="text"
                        className='grow border-1 rounded border-gray-500 px-2'
                        id="courseAuthor"
                        required
                    />
                </div>
                <div className="flex my-2">
                    <label htmlFor="courseItems" className='w-56 text-right pr-5'>Course Items:</label>
                    <textarea
                        {...register("courseItems")}
                        rows={2}
                        id="courseItems"
                        className="grow border-1 rounded border-gray-500 px-2"
                        placeholder='Enter course items and put comma between them'
                        required
                    />
                </div>
                <div className="flex my-2">
                    <label htmlFor="courseContents" className='w-56 text-right pr-5'>Course Contents:</label>
                    <textarea
                        {...register("courseContents")}
                        rows={2}
                        id="courseContents"
                        className="grow border-1 rounded border-gray-500 px-2"
                        placeholder='Enter course contents and put comma between them'
                        required
                    />
                </div>
                <div className='flex justify-center mt-4'>
                    <button type="submit" className='bg-red-700 text-white text-xl rounded px-20 py-2' >Add Course</button>
                </div>
            </form >
        </div>
    )
}

export default AddCourse
