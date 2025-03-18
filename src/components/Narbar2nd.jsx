import { useState } from 'react';

function Narbar2nd() {
    const [imageSrc, setImageSrc] = useState('../assets/images/SOne_index_menu02.png');
    const [imageSrc2, setImageSrc2] = useState('../assets/images/SOne_index_menu01.png');
    const [imageSrc3, setImageSrc3] = useState('../assets/images/SOne_index_menu01.png');
    const [imageSrc4, setImageSrc4] = useState('../assets/images/SOne_index_menu01.png');
    const [imageSrc5, setImageSrc5] = useState('../assets/images/SOne_index_menu01.png');
    const [imageSrc6, setImageSrc6] = useState('../assets/images/SOne_index_menu01.png');

    const [imageFacebook, setImageFacebook] = useState('../assets/images/SOne_index_btfacebook.png');
    const [imageX, setImageX] = useState('../assets/images/SOne_index_bttwitter.png');
    const [imageYoutube, setImageYoutube] = useState('../assets/images/SOne_index_btyoutube.png');

    const handleMouseEnter = () => {
        setImageSrc('../assets/images/SOne_index_menu02.png');
    };

    const handleMouseLeave = () => {
        setImageSrc('../assets/images/SOne_index_menu02.png');
    };
    const handleMouseEnter2 = () => {
        setImageSrc2('../assets/images/SOne_index_menu02.png');
    };

    const handleMouseLeave2 = () => {
        setImageSrc2('../assets/images/SOne_index_menu01.png');
    };
    const handleMouseEnter3 = () => {
        setImageSrc3('../assets/images/SOne_index_menu02.png');
    };

    const handleMouseLeave3 = () => {
        setImageSrc3('../assets/images/SOne_index_menu01.png');
    };
    const handleMouseEnter4 = () => {
        setImageSrc4('../assets/images/SOne_index_menu02.png');
    };

    const handleMouseLeave4 = () => {
        setImageSrc4('../assets/images/SOne_index_menu01.png');
    };
    const handleMouseEnter5 = () => {
        setImageSrc5('../assets/images/SOne_index_menu02.png');
    };

    const handleMouseLeave5 = () => {
        setImageSrc5('../assets/images/SOne_index_menu01.png');
    };
    const handleMouseEnter6 = () => {
        setImageSrc6('../assets/images/SOne_index_menu02.png');
    };

    const handleMouseLeave6 = () => {
        setImageSrc6('../assets/images/SOne_index_menu01.png');
    };

    // facebook X youtube

    const handleMouseEnterFacebook = () => {
        setImageFacebook('../assets/images/SOne_index_btfacebook1.png');
    };

    const handleMouseLeaveFacebook = () => {
        setImageFacebook('../assets/images/SOne_index_btfacebook.png');
    };
    const handleMouseEnterX = () => {
        setImageX('../assets/images/SOne_index_bttwitter1.png');
    };

    const handleMouseLeaveX = () => {
        setImageX('../assets/images/SOne_index_bttwitter.png');
    };
    const handleMouseEnterYoutube = () => {
        setImageYoutube('../assets/images/SOne_index_btyoutube1.png');
    };

    const handleMouseLeaveYoutube = () => {
        setImageYoutube('../assets/images/SOne_index_btyoutube.png');
    };
    return (
        <div className="p-1 bg-black flex justify-between items-center rounded">
            <div className="flex space-x-2">
                <div className="group">
                    <img
                        src={imageSrc}
                        alt="Icon"
                        className="h-6 w-6"
                        onMouseEnter={handleMouseEnter}
                        onMouseLeave={handleMouseLeave}
                    />
                </div>
                <a href="#product-services" className="text-red-500 hover:text-red-500">Product & Services</a>

                <img
                    src={imageSrc2}
                    alt="Icon"
                    className="h-6 w-6"
                    onMouseEnter={handleMouseEnter2}
                    onMouseLeave={handleMouseLeave2}
                />
                <a href="#promotions" className="text-white hover:text-red-500">Promotions</a>

                <img
                    src={imageSrc3}
                    alt="Icon"
                    className="h-6 w-6"
                    onMouseEnter={handleMouseEnter3}
                    onMouseLeave={handleMouseLeave3}
                />
                <a href="#news-events" className="text-white hover:text-red-500">News & Events</a>

                <img
                    src={imageSrc4}
                    alt="Icon"
                    className="h-6 w-6"
                    onMouseEnter={handleMouseEnter4}
                    onMouseLeave={handleMouseLeave4}
                />
                <a href="#safety-tips" className="text-white hover:text-red-500">Safety Tips</a>

                <img
                    src={imageSrc5}
                    alt="Icon"
                    className="h-6 w-6"
                    onMouseEnter={handleMouseEnter5}
                    onMouseLeave={handleMouseLeave5}
                />
                <a href="#faqs" className="text-white hover:text-red-500">FAQS</a>

                <img
                    src={imageSrc6}
                    alt="Icon"
                    className="h-6 w-6"
                    onMouseEnter={handleMouseEnter6}
                    onMouseLeave={handleMouseLeave6}
                />
                <a href="#location" className="text-white hover:text-red-500">Location</a>
            </div>

            {/* Icons Section */}
            <div className="flex space-x-4">
                <img
                    src={imageFacebook}
                    alt="Icon"
                    className="h-6 w-6"
                    onMouseEnter={handleMouseEnterFacebook}
                    onMouseLeave={handleMouseLeaveFacebook}
                />
                <img
                    src={imageX}
                    alt="Icon"
                    className="h-6 w-6"
                    onMouseEnter={handleMouseEnterX}
                    onMouseLeave={handleMouseLeaveX}
                />
                <img
                    src={imageYoutube}
                    alt="Icon"
                    className="h-6 w-6"
                    onMouseEnter={handleMouseEnterYoutube}
                    onMouseLeave={handleMouseLeaveYoutube}
                />
            </div>
        </div>
    )
}

export default Narbar2nd