import DefaultLayout from '../../components/layouts/Default';
import { wrapper } from "../../redux/wrapper";

export const getServerSideProps = wrapper.getServerSideProps(async ({ req, res, store }) => {
    const state = store.getState();
    const currentUser = state.currentUser
    if (!currentUser.roles || !currentUser.roles.includes("ADMIN")) {
        return {
            redirect: {
                destination: '/',
                permanent: false,
            },
        }
    }
    return {
        props: {
            currentUser,
        },
    };
});


export default function Admin(props) {

    return (
        <DefaultLayout>
            <h1>Админ панел</h1>
        </DefaultLayout>
    )
}