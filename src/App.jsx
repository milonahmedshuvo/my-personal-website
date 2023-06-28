import { RouterProvider } from 'react-router-dom'
import './App.css'
import { router } from './Router'
import {
  useQuery,
  useMutation,
  useQueryClient,
  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query'
const queryClient = new QueryClient()
import toast, { Toaster } from 'react-hot-toast';



function App() {
 
  return (
    <div className='p-full md:px-24'>
       
      <QueryClientProvider client={queryClient}>
          <RouterProvider router={router}>
           </RouterProvider>  
      </QueryClientProvider>
      <Toaster></Toaster>
    </div>
  )
}

export default App
