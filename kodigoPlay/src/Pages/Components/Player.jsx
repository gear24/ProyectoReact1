import MainContainer from "../../MicroComponents/MainContainer";
import PlayerControls from "../../MicroComponents/PlayerControls";
import PlayList from "../../MicroComponents/PlayList";
export const Player = () => {

    return (
        <>
            <MainContainer>
            <PlayerControls />
            <div class="large-space"></div>
            <PlayList />



            </MainContainer>
        </>
    );
};
