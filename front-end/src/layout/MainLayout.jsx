import { Header } from '../components/Common/Header'
export const MainLayout = ({  children }) => {
  
    return (
        <>
            <Header />
            <main>
                {children}
            </main>

        </>
    )
}
