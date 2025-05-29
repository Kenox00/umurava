import { createSlice, PayloadAction, createAsyncThunk } from "@reduxjs/toolkit";
import { Course } from "@/types/course";
import { CourseService } from "@/lib/courseService";

interface CourseState {
  enrolledCourses: string[];
  searchQuery: string;
  courses: Course[];
  selectedCourse: Course | null;
  loading: boolean;
  error: string | null;
}

const initialState: CourseState = {
  enrolledCourses: [],
  searchQuery: "",
  courses: [],
  selectedCourse: null,
  loading: false,
  error: null,
};

// Async thunks for API operations
export const fetchCourses = createAsyncThunk(
  'course/fetchCourses',
  async (searchTerm: string | undefined, { rejectWithValue }) => {
    try {
      return await CourseService.getCourses(searchTerm);
    } catch (error) {
      return rejectWithValue((error as Error).message);
    }
  }
);

export const fetchCourseById = createAsyncThunk(
  'course/fetchCourseById',
  async (courseId: string, { rejectWithValue }) => {
    try {
      return await CourseService.getCourseById(courseId);
    } catch (error) {
      return rejectWithValue((error as Error).message);
    }
  }
);

const courseSlice = createSlice({
  name: "course",
  initialState,
  reducers: {
    enroll(state, action: PayloadAction<string>) {
      if (!state.enrolledCourses.includes(action.payload)) {
        state.enrolledCourses.push(action.payload);
      }
    },
    unenroll(state, action: PayloadAction<string>) {
      state.enrolledCourses = state.enrolledCourses.filter(id => id !== action.payload);
    },
    setSearchQuery(state, action: PayloadAction<string>) {
      state.searchQuery = action.payload;
    },
    clearError(state) {
      state.error = null;
    },
  },
  extraReducers: (builder) => {
    builder
      // fetchCourses cases
      .addCase(fetchCourses.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchCourses.fulfilled, (state, action) => {
        state.loading = false;
        state.courses = action.payload;
      })
      .addCase(fetchCourses.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as string;
      })
      // fetchCourseById cases  
      .addCase(fetchCourseById.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchCourseById.fulfilled, (state, action) => {
        state.loading = false;
        state.selectedCourse = action.payload;
      })
      .addCase(fetchCourseById.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as string;
      });
  },
});

export const { enroll, unenroll, setSearchQuery, clearError } = courseSlice.actions;
export default courseSlice.reducer;
