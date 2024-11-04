import "../App.css";
import image1 from "../assets/images/cover_image_01.jpeg";
import image2 from "../assets/images/cover_image_02.jpeg";
import image3 from "../assets/images/cover_image_03.jpeg";

const About = () => {
    return (
        <div className="about_container">
            <div className="about_intro">
                <div className="about_title">
                    <p>
                        羽毛球起源於古代中國、希臘和印度的羽毛遊戲，而現代羽毛球則在19世紀由英國軍人引入英國，逐步發展成為正式運動。1893年成立了第一個羽毛球協會，並於1899年舉行首屆全英羽毛球公開賽，1992年羽毛球正式成為奧運項目。
                    </p>
                    <p>
                        羽毛球在亞洲地區特別受歡迎，包括中國、印尼、馬來西亞、韓國和日本等國家都培養了世界級選手，經常在國際賽場奪冠，並形成了具有特色的亞洲打法。許多亞洲國家設有體系完善的羽毛球培訓學校和俱樂部，使羽毛球在亞洲成為具有文化和經濟影響力的運動。
                    </p>
                    <p>
                        羽毛球對身心健康有顯著的益處。作為一種高強度有氧運動，它能增強心肺功能、提升協調性與平衡感，同時幫助減重。對於心理健康方面，羽毛球有助於釋放壓力、提高集中力並增強心理韌性。此外，它易於上手，適合各年齡層，成為促進人際關係的良好活動。羽毛球是一項結合歷史、文化和健康益處的運動，廣受亞洲各地的喜愛。
                    </p>
                </div>
            </div>
            <div className="about_warpper reverse">
                <div className="about_image">
                    <img src={image1} alt="image1" />
                </div>
                <div className="about_description">
                    <h3>關於我們</h3>
                    <ul className="about_content">
                        <li>
                            <p>本學院旨在推廣羽毛球運動並培訓人才，提供羽毛球訓練班，幫助學員提升技術水平和興趣。</p>
                        </li>
                        <li>
                            <p>我們的訓練涵蓋技術、戰術和體能，並會為學員報名參加比賽，讓他們獲得實戰經驗。</p>
                        </li>
                        <li>
                            <p>此外，學院也致力於推動融合教育，為有特殊需要的兒童提供全面照顧和優質教育。</p>
                        </li>
                        <li>
                            <p>我們希望每位學生都能獲得平等機會，發揮潛能，在羽毛球運動中實現成長與自信。</p>
                        </li>
                    </ul>
                </div>
            </div>
            <div className="about_warpper">
                <div className="about_image">
                    <img src={image2} alt="image2" />
                </div>
                <div className="about_description">
                    <h3>品牌理念</h3>
                    <ul className="about_content">
                        <li>
                            <p>透過運動培養正念思維，接受失敗。可以幫助孩子們培養正念思維和接受失敗的能力。</p>
                        </li>
                        <li>
                            <p>在運動中，小朋友們需要專注於當下，感受自己的身體和情緒，這有助於他們學會正念。</p>
                        </li>
                        <li>
                            <p>在運動過程中，失敗是不可避免的。這些經歷雖然令人沮喪，但卻是成長的寶貴機會。</p>
                        </li>
                        <li>
                            <p>透過正念的引導，孩子們能夠學會如何接受失敗，反思自己的表現，而不是沉浸在負面情緒中。</p>
                        </li>
                        <li>
                            <p>這樣的過程能夠提升他們的抗壓能力，讓他們在面對困難時變得更加堅韌。</p>
                        </li>
                        <li>
                            <p>透過訓練增強孩子們的體能，還能幫助他們建立健康的心態，讓他們在生活中勇於挑戰自己，接受失敗，並從中學習和成長。</p>
                        </li>
                    </ul>
                </div>
            </div>
            <div className="about_warpper reverse">
                <div className="about_image">
                    <img src={image3} alt="image3" />
                </div>
                <div className="about_description">
                    <h3>課程重心</h3>
                    <ul className="about_content">
                        <li><p>正確的羽毛球技巧</p></li>
                        <li><p>運動心理及體適能訓練發展</p></li>
                        <li><p>培養團體合作意識</p></li>
                    </ul>
                </div>
            </div>
            <div className="about_warpper">
                <div className="about_image">
                    <img src={image1} alt="" />
                </div>
                <div className="about_description">
                    <h3>教練</h3>
                    <ul className="about_content instructor">
                        <li><p>經驗：</p><p>任教10年</p></li>
                        <li><p>資歷：</p><p>香港羽毛球總會註冊教練</p></li>
                        <li><p></p><p>前重點青年軍成員</p></li>
                        <li><p></p><p>2014-18 理工大學校隊代表</p></li>
                        <li><p>相關證書：</p><p>持有特殊教育運動證書</p></li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default About;
