import { h } from 'preact';
import style from './style';

const Home = () => (
    <div class={style.home}>
        <h1>Home</h1>
        <p>This is the Home component.</p>

        <textarea placeholder="Write your daily plan" />
        <button>Submit</button>
    </div>
);

export default Home;
