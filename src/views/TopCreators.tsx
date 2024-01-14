import { useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import { utilService } from "../services/util.service";
import { loadUsers } from "../store/actions/user.actions";
import { User } from "../models/models";

import { MainHeader } from "../cmps/MainHeader";
import { MainFooter } from "../cmps/MainFooter";

interface RootState {
    userModule: {
        users: User[];
    };
}

export function TopCreators() {
    const navigate = useNavigate()
    const users = useSelector((storeState: RootState) => storeState.userModule.users)
    const [filter, setFilter] = useState('today')

    useEffect(() => {
        loadUsers()
            .catch((err) => {
                console.log('err', err)
            })
    }, []);

    return (
        <section className="top-creators main-container">
            <MainHeader />
            <main>
                <h1>Top Creators</h1>
                <header className="flex space-between">
                    <button className={`${filter === 'today' ? 'select' : ''} today`} onClick={() => setFilter('today')}></button>
                    <button className={`${filter === 'week' ? 'select' : ''} week`} onClick={() => setFilter('week')} ></button>
                    <button className={`${filter === 'month' ? 'select' : ''} month`} onClick={() => setFilter('month')}></button>
                    <button className={`${filter === 'all' ? 'select' : ''} all`} onClick={() => setFilter('all')}>All Time</button>
                </header>

                <table className="form-table">
                    <tbody>
                        <tr >
                            <th className="index">#</th>
                            <th className="user">Artist</th>
                            <th className="change">Change</th>
                            <th className="runs">Total Runs</th>
                            <th className="credits">Total Credits</th>
                        </tr>
                        {users.map(({ _id, imgUrl, name, runs }, i) =>
                            <tr key={_id} onClick={() => navigate(`/creator/${_id}`)}>
                                <td className="index">
                                    <div className="num">
                                        {i + 1}
                                    </div>
                                </td>
                                <td className="user">
                                    <div className="flex align-center gap20">
                                        <img src={imgUrl} />
                                        {name}
                                    </div>
                                </td>
                                <td className="change num"><p>+1.41%</p></td>
                                <td className="runs num">{utilService.formatNumber(runs)}</td>
                                <td className="credits num">1.2M</td>

                            </tr>
                        )}
                    </tbody>
                </table>
            </main>
            <MainFooter />
        </section>
    )
}