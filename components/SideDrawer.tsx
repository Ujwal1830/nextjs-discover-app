import Image from 'next/image'
import React from 'react'

const BASE_URL_PHOTO = "https://maps.googleapis.com/maps/api/place/photo?maxwidth=400&photo_reference="

function SideDrawer({place, close }: any) {

    const CURRENT_URL = 'https://www.google.com/maps/search/?api=1&query='+place.name+place.formatted_address

    const handleDirectionClick=()=>{
        window.open(CURRENT_URL)
    }

    const copyToClipboard = async(url:any) => {
        try {
                await navigator.clipboard.writeText(url);
                alert('Copied to Clipboard');
            } catch (err) {
                console.error('Unable to copy to clipboard', err);
            }
        };

  return (
    <div className='h-screen w-screen md:w-[500px] bg-purple-100 shadow-md p-5' >
        <button onClick={()=>close()}>
            <svg width="30px" height="30px" viewBox="0 0 1024 1024" fill="#000000"><g stroke-width="0"></g><g stroke-linecap="round" stroke-linejoin="round"></g><g><path fill="#000000" d="M195.2 195.2a64 64 0 0 1 90.496 0L512 421.504 738.304 195.2a64 64 0 0 1 90.496 90.496L602.496 512 828.8 738.304a64 64 0 0 1-90.496 90.496L512 602.496 285.696 828.8a64 64 0 0 1-90.496-90.496L421.504 512 195.2 285.696a64 64 0 0 1 0-90.496z"></path></g></svg>
        </button>

        <div>
            <h2 className='line-clamp-2 text-2xl'>{place.name}</h2>

            <Image unoptimized
                className='w-full mt-3 h-[270px] object-cover rounded-xl' 
                src={BASE_URL_PHOTO+place?.photos[0]?.photo_reference+"&key="+process.env.NEXT_PUBLIC_GOOGLE_PLACE_API_KEY} 
                alt="placeholder" 
                width={200} 
                height={70} 
            />

            <div className='flex gap-2 mt-2 items-center'>
                <svg className='max-w-[35px]' viewBox="0 0 24 24" fill="none" >
                    <g strokeWidth="0"></g><g strokeLinecap="round" strokeLinejoin="round"></g><g > <path fill-rule="evenodd" clip-rule="evenodd" d="M12.2848 18.9935C12.1567 19.0875 12.0373 19.1728 11.9282 19.2493C11.8118 19.1721 11.6827 19.0833 11.5427 18.9832C10.8826 18.5109 10.0265 17.8176 9.18338 16.9529C7.45402 15.1792 6 12.9151 6 10.5C6 7.18629 8.68629 4.5 12 4.5C15.3137 4.5 18 7.18629 18 10.5C18 12.8892 16.4819 15.1468 14.6893 16.9393C13.8196 17.8091 12.9444 18.5099 12.2848 18.9935ZM19.5 10.5C19.5 16.5 12 21 12 21C11.625 21 4.5 16.5 4.5 10.5C4.5 6.35786 7.85786 3 12 3C16.1421 3 19.5 6.35786 19.5 10.5ZM13.5 10.5C13.5 11.3284 12.8284 12 12 12C11.1716 12 10.5 11.3284 10.5 10.5C10.5 9.67157 11.1716 9 12 9C12.8284 9 13.5 9.67157 13.5 10.5ZM15 10.5C15 12.1569 13.6569 13.5 12 13.5C10.3431 13.5 9 12.1569 9 10.5C9 8.84315 10.3431 7.5 12 7.5C13.6569 7.5 15 8.84315 15 10.5Z" fill="#d58bea"></path> </g>
                </svg>
                <h2 className=' text-gray-600 line-clamp-2'>
                    {place.formatted_address}
                </h2>
            </div>

            <div className='flex gap-2 mt-2 items-center'>
                <svg className='max-w-[35px]' viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <g stroke-width="0"></g><g stroke-linecap="round" stroke-linejoin="round"></g><g> <path d="M11.2691 4.41115C11.5006 3.89177 11.6164 3.63208 11.7776 3.55211C11.9176 3.48263 12.082 3.48263 12.222 3.55211C12.3832 3.63208 12.499 3.89177 12.7305 4.41115L14.5745 8.54808C14.643 8.70162 14.6772 8.77839 14.7302 8.83718C14.777 8.8892 14.8343 8.93081 14.8982 8.95929C14.9705 8.99149 15.0541 9.00031 15.2213 9.01795L19.7256 9.49336C20.2911 9.55304 20.5738 9.58288 20.6997 9.71147C20.809 9.82316 20.8598 9.97956 20.837 10.1342C20.8108 10.3122 20.5996 10.5025 20.1772 10.8832L16.8125 13.9154C16.6877 14.0279 16.6252 14.0842 16.5857 14.1527C16.5507 14.2134 16.5288 14.2807 16.5215 14.3503C16.5132 14.429 16.5306 14.5112 16.5655 14.6757L17.5053 19.1064C17.6233 19.6627 17.6823 19.9408 17.5989 20.1002C17.5264 20.2388 17.3934 20.3354 17.2393 20.3615C17.0619 20.3915 16.8156 20.2495 16.323 19.9654L12.3995 17.7024C12.2539 17.6184 12.1811 17.5765 12.1037 17.56C12.0352 17.5455 11.9644 17.5455 11.8959 17.56C11.8185 17.5765 11.7457 17.6184 11.6001 17.7024L7.67662 19.9654C7.18404 20.2495 6.93775 20.3915 6.76034 20.3615C6.60623 20.3354 6.47319 20.2388 6.40075 20.1002C6.31736 19.9408 6.37635 19.6627 6.49434 19.1064L7.4341 14.6757C7.46898 14.5112 7.48642 14.429 7.47814 14.3503C7.47081 14.2807 7.44894 14.2134 7.41394 14.1527C7.37439 14.0842 7.31195 14.0279 7.18708 13.9154L3.82246 10.8832C3.40005 10.5025 3.18884 10.3122 3.16258 10.1342C3.13978 9.97956 3.19059 9.82316 3.29993 9.71147C3.42581 9.58288 3.70856 9.55304 4.27406 9.49336L8.77835 9.01795C8.94553 9.00031 9.02911 8.99149 9.10139 8.95929C9.16534 8.93081 9.2226 8.8892 9.26946 8.83718C9.32241 8.77839 9.35663 8.70162 9.42508 8.54808L11.2691 4.41115Z" stroke="#d58bea" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path> </g>
                    </svg>
                <h2 className='text-gray-600 tracking-widest flex'>{place.rating} 
                (<svg width="20px" height="24px" viewBox="0 0 24 24" fill="none"><g stroke-width="0"></g><g stroke-linecap="round" stroke-linejoin="round"></g><g> <circle cx="12" cy="6" r="4" stroke="#000000" stroke-width="1.5"></circle> <path d="M15 20.6151C14.0907 20.8619 13.0736 21 12 21C8.13401 21 5 19.2091 5 17C5 14.7909 8.13401 13 12 13C15.866 13 19 14.7909 19 17C19 17.3453 18.9234 17.6804 18.7795 18" stroke="#000000" stroke-width="1.5" stroke-linecap="round"></path> </g></svg>{place.user_ratings_total})</h2>
            </div>

            <hr className='my-2 border-1 border-black/30' />

            <div className='mt-2 mx-6 flex gap-6 justify-around'>
                <button onClick={handleDirectionClick} className='flex flex-1 gap-4 justify-center items-center bg-[#d58bea] pr-3 py-1.5 rounded-lg'>
                    <svg width="36px" height="36px" viewBox="0 0 24 24" fill="none" ><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M18.9762 5.5914L14.6089 18.6932C14.4726 19.1023 13.8939 19.1023 13.7575 18.6932L11.7868 12.7808C11.6974 12.5129 11.4871 12.3026 11.2192 12.2132L5.30683 10.2425C4.89772 10.1061 4.89772 9.52743 5.30683 9.39106L18.4086 5.0238C18.7594 4.90687 19.0931 5.24061 18.9762 5.5914Z" stroke="#3f3e47" stroke-linecap="round" stroke-linejoin="round"></path> </g></svg>
                    <span className='text-lg'>Direction</span>
                </button>
                
                <button 
                    onClick={() => copyToClipboard(CURRENT_URL)}
                    className='flex flex-1 gap-4 justify-center items-center bg-[#d58bea] pr-3 py-1.5 rounded-lg'>
                    <svg width="36px" height="36px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path fill-rule="evenodd" clip-rule="evenodd" d="M13.803 5.33333C13.803 3.49238 15.3022 2 17.1515 2C19.0008 2 20.5 3.49238 20.5 5.33333C20.5 7.17428 19.0008 8.66667 17.1515 8.66667C16.2177 8.66667 15.3738 8.28596 14.7671 7.67347L10.1317 10.8295C10.1745 11.0425 10.197 11.2625 10.197 11.4872C10.197 11.9322 10.109 12.3576 9.94959 12.7464L15.0323 16.0858C15.6092 15.6161 16.3473 15.3333 17.1515 15.3333C19.0008 15.3333 20.5 16.8257 20.5 18.6667C20.5 20.5076 19.0008 22 17.1515 22C15.3022 22 13.803 20.5076 13.803 18.6667C13.803 18.1845 13.9062 17.7255 14.0917 17.3111L9.05007 13.9987C8.46196 14.5098 7.6916 14.8205 6.84848 14.8205C4.99917 14.8205 3.5 13.3281 3.5 11.4872C3.5 9.64623 4.99917 8.15385 6.84848 8.15385C7.9119 8.15385 8.85853 8.64725 9.47145 9.41518L13.9639 6.35642C13.8594 6.03359 13.803 5.6896 13.803 5.33333Z" fill="#2a2b32"></path> </g></svg>
                    <span className='text-lg text-center'>Share</span>
                </button>
            </div>

            <div className='mt-2'>
                <iframe
                    className='w-full h-[280px] rounded-xl'
                    width={600}
                    height={450}
                    loading="lazy"
                    src={"https://www.google.com/maps/embed/v1/place?key="+process.env.NEXT_PUBLIC_GOOGLE_PLACE_API_KEY+"&q="+place.formatted_address}>
                </iframe>
            </div>
        </div>
    </div>
  )
}

export default SideDrawer