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




function App() {
 
  return (
    <div className='p-full md:px-36'>
       
      <QueryClientProvider client={queryClient}>
          <RouterProvider router={router}>
           </RouterProvider>  
      </QueryClientProvider>
    </div>
  )
}

export default App
