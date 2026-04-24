import "./IdeaTeachawy.scss";

interface Props {
    locale: string
}

const IdeaTeachawy = ({ locale }: Props) => {
    const isAr = locale === "ar";

    return (
        <div className="idea-teachawy">
            <div className="container">
                <div className="box">
                    <h3>
                        {isAr ? "فكرة تيتشاوي؟" : "What is Teachawy about?"}
                    </h3>
                    <p>
                        {isAr
                            ? "الكثير من المدرسين يمتلكون محتوى ومعرفة قيّمة، لكنهم يواجهون صعوبة في تنظيمها وتقديمها ضمن تجربة تعليمية واضحة ومتكاملة، ومن هنا جاءت فكرة تيتشاوي."
                            : "Many teachers have valuable knowledge and content, but they struggle to organize and present it within a clear and integrated learning experience. Thats where the idea of Teachawy was born."
                        }
                    </p>
                </div>

                <div className="box">
                    <h3>
                        {isAr ? "كيف نفكّر في تيتشاوي؟" : "How do we think at Teachawy?"}
                    </h3>
                    <p>
                        {isAr
                            ? "نؤمن في تيتشاوي بأن التقنية وُجدت لتسهيل التعليم، لذلك نبني منصة بسيطة وواضحة تُطوَّر وفق احتياجات المدرسين الفعلية."
                            : "At Teachawy, we believe technology exists to simplify education. Thats why we build a simple and clear platform, developed according to the real needs of teachers."
                        }
                    </p>
                </div>
            </div>
        </div>
    );
}

export default IdeaTeachawy;