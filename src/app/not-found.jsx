import PageContainer from '@/components/container/PageContainer'
import Link from 'next/link'

export default function NotFound() {
    return (
        <PageContainer>
            <div className='flex flex-col justify-center items-center h-full'>
                <h2 className='text-4xl'>Not Found............................</h2>
                <p>Could not find requested resource</p>
                <Link href="/">Return Home</Link>
            </div>
        </PageContainer>
    )
}