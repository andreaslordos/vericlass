import { useAppContext } from "../context/AppContext";
import { Plus, Minus } from "lucide-react";

const CourseListItem = ({ course }) => {
    const { selectedCourse, setSelectedCourse, myCourses, addCourse, removeCourse } = useAppContext();
    const isSelected = selectedCourse?.course_id === course.course_id;
    const isAdded = myCourses.some(c => c.course_id === course.course_id);
    
    return (
      <div 
        className={`grid grid-cols-4 py-2 px-2 text-sm hover:bg-gray-100 cursor-pointer ${isSelected ? 'bg-blue-50' : ''}`}
        onClick={() => setSelectedCourse(course)}
      >
        <div className="truncate font-medium">{course.subject_catalog}</div>
        <div className="text-center">{course.rating ? Math.round(course.rating * 10) / 10 : 'N/A'}</div>
        <div className="text-center">{course.units || 'N/A'}</div>
        <div className="text-right truncate">{course.course_title}</div>
        
        {isSelected && (
          <div className="col-span-4 flex justify-between items-center mt-2">
            {isAdded ? (
              <button 
                className="px-2 py-1 text-xs bg-red-100 text-red-800 rounded flex items-center"
                onClick={(e) => {
                  e.stopPropagation();
                  removeCourse(course.course_id);
                }}
              >
                <Minus size={12} className="mr-1" /> Remove
              </button>
            ) : (
              <button 
                className="px-2 py-1 text-xs bg-green-100 text-green-800 rounded flex items-center"
                onClick={(e) => {
                  e.stopPropagation();
                  addCourse(course);
                }}
              >
                <Plus size={12} className="mr-1" /> Add
              </button>
            )}
          </div>
        )}
      </div>
    );
  };
  
  export default CourseListItem;