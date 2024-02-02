import Image from 'next/image';
import Container from './Container';

export default function Header(){
    return(
        <>
        <div className='bg-gray-1000 p-4'>
            <Container>
                <div className='flex justify-between'>
                    <Image src={'/logo.svg'} alt={'Talk to Me!'} width={120} height={120} />
                    <Image src={'/hero.svg'} alt={'Hero Code'} width={60} height={60} />
                </div>
            </Container>
        </div>
        </>
    )
}