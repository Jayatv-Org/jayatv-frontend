import React from 'react';

const TodaySpecial: React.FC = () => {
    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 h-[50vh] text-white bg-black">
            {/* First Column */}
            <div className="flex flex-col">
                <div className="flex flex-col justify-center p-4 bg-red-600 h-2/3">
                    <h2 className="text-2xl font-bold">DERANA TELE KATHA</h2>
                    <p className="mt-4 text-sm">
                        Explore a curated collection of captivating Sri Lankan teledramas presented by TV Derana.
                    </p>
                    <button className="mt-4 bg-white text-red-600 py-1 px-3 hover:bg-gray-200 transition duration-200 text-sm">
                        MORE
                    </button>
                </div>
                <div className="h-1/3 border-2 border-transparent hover:border-white transition duration-300">
                    <img
                        src="https://scontent.fcmb8-1.fna.fbcdn.net/v/t39.30808-6/434314516_966070682189854_7237894003024172780_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=127cfc&_nc_eui2=AeEHml2gwo9uSmy9KutsyHXWwjw-_u2CSx3CPD7-7YJLHfrKCQH5nGGp1iyqUmQGHFbzVKrwEGAVqHAhzKBImjzi&_nc_ohc=8hHnthyhNG0Q7kNvgFskLmP&_nc_ht=scontent.fcmb8-1.fna&oh=00_AYDb6TINF_O2gKThYMD-kyVWGvvhZIezRlrZL0x8F0i6vw&oe=66CA9F5C"
                        alt="Image 1"
                        className="object-cover w-full h-full"
                    />
                </div>
            </div>

            {/* Second Column */}
            <div className="flex flex-col">
                <div className="h-1/3 border-2 border-transparent hover:border-white transition duration-300">
                    <img
                        src="https://scontent.fcmb8-1.fna.fbcdn.net/v/t39.30808-6/434314516_966070682189854_7237894003024172780_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=127cfc&_nc_eui2=AeEHml2gwo9uSmy9KutsyHXWwjw-_u2CSx3CPD7-7YJLHfrKCQH5nGGp1iyqUmQGHFbzVKrwEGAVqHAhzKBImjzi&_nc_ohc=8hHnthyhNG0Q7kNvgFskLmP&_nc_ht=scontent.fcmb8-1.fna&oh=00_AYDb6TINF_O2gKThYMD-kyVWGvvhZIezRlrZL0x8F0i6vw&oe=66CA9F5C"
                        alt="Image 2"
                        className="object-cover w-full h-full"
                    />
                </div>
                <div className="h-2/3 border-2 border-transparent hover:border-white transition duration-300">
                    <img
                        src="https://scontent.fcmb8-1.fna.fbcdn.net/v/t39.30808-6/434314516_966070682189854_7237894003024172780_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=127cfc&_nc_eui2=AeEHml2gwo9uSmy9KutsyHXWwjw-_u2CSx3CPD7-7YJLHfrKCQH5nGGp1iyqUmQGHFbzVKrwEGAVqHAhzKBImjzi&_nc_ohc=8hHnthyhNG0Q7kNvgFskLmP&_nc_ht=scontent.fcmb8-1.fna&oh=00_AYDb6TINF_O2gKThYMD-kyVWGvvhZIezRlrZL0x8F0i6vw&oe=66CA9F5C"
                        alt="Image 3"
                        className="object-cover w-full h-full"
                    />
                </div>
            </div>

            {/* Third Column */}
            <div className="flex flex-col">
                <div className="h-2/3 border-2 border-transparent hover:border-white transition duration-300">
                    <img
                        src="https://scontent.fcmb8-1.fna.fbcdn.net/v/t39.30808-6/434314516_966070682189854_7237894003024172780_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=127cfc&_nc_eui2=AeEHml2gwo9uSmy9KutsyHXWwjw-_u2CSx3CPD7-7YJLHfrKCQH5nGGp1iyqUmQGHFbzVKrwEGAVqHAhzKBImjzi&_nc_ohc=8hHnthyhNG0Q7kNvgFskLmP&_nc_ht=scontent.fcmb8-1.fna&oh=00_AYDb6TINF_O2gKThYMD-kyVWGvvhZIezRlrZL0x8F0i6vw&oe=66CA9F5C"
                        alt="Image 4"
                        className="object-cover w-full h-full"
                    />
                </div>
                <div className="h-1/3 border-2 border-transparent hover:border-white transition duration-300">
                    <img
                        src="https://scontent.fcmb8-1.fna.fbcdn.net/v/t39.30808-6/434314516_966070682189854_7237894003024172780_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=127cfc&_nc_eui2=AeEHml2gwo9uSmy9KutsyHXWwjw-_u2CSx3CPD7-7YJLHfrKCQH5nGGp1iyqUmQGHFbzVKrwEGAVqHAhzKBImjzi&_nc_ohc=8hHnthyhNG0Q7kNvgFskLmP&_nc_ht=scontent.fcmb8-1.fna&oh=00_AYDb6TINF_O2gKThYMD-kyVWGvvhZIezRlrZL0x8F0i6vw&oe=66CA9F5C"
                        alt="Image 5"
                        className="object-cover w-full h-full"
                    />
                </div>
            </div>

            {/* Fourth Column */}
            <div className="flex flex-col">
                <div className="h-2/3 border-2 border-transparent hover:border-white transition duration-300">
                    <img
                        src="https://scontent.fcmb8-1.fna.fbcdn.net/v/t39.30808-6/434314516_966070682189854_7237894003024172780_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=127cfc&_nc_eui2=AeEHml2gwo9uSmy9KutsyHXWwjw-_u2CSx3CPD7-7YJLHfrKCQH5nGGp1iyqUmQGHFbzVKrwEGAVqHAhzKBImjzi&_nc_ohc=8hHnthyhNG0Q7kNvgFskLmP&_nc_ht=scontent.fcmb8-1.fna&oh=00_AYDb6TINF_O2gKThYMD-kyVWGvvhZIezRlrZL0x8F0i6vw&oe=66CA9F5C"
                        alt="Image 6"
                        className="object-cover w-full h-full"
                    />
                </div>
                <div className="h-1/3 border-2 border-transparent hover:border-white transition duration-300">
                    <img
                        src="https://scontent.fcmb8-1.fna.fbcdn.net/v/t39.30808-6/434314516_966070682189854_7237894003024172780_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=127cfc&_nc_eui2=AeEHml2gwo9uSmy9KutsyHXWwjw-_u2CSx3CPD7-7YJLHfrKCQH5nGGp1iyqUmQGHFbzVKrwEGAVqHAhzKBImjzi&_nc_ohc=8hHnthyhNG0Q7kNvgFskLmP&_nc_ht=scontent.fcmb8-1.fna&oh=00_AYDb6TINF_O2gKThYMD-kyVWGvvhZIezRlrZL0x8F0i6vw&oe=66CA9F5C"
                        alt="Image 7"
                        className="object-cover w-full h-full"
                    />
                </div>
            </div>
        </div>
    );
};

export default TodaySpecial;
