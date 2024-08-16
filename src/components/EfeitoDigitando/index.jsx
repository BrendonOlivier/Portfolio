import Typical from "react-typical";
import './styles.css';

export function Digitando() {
    return (
        <h3 className="typing-effect">
            <Typical
                steps={[
                    'Freelancer', 5000,
                    'Developer FullStack', 5000,
                ]}
                loop={Infinity}
            />
        </h3>

    )
}