const Square = ({cells,cell,onClick,isActive}) => {
    const checkIfIsActive = () => {
        if(!isActive) return
        if(cells[cell] !== null) return false
        return true
    }
    return (
        <td className={checkIfIsActive() ? 'active' : ''} onClick={onClick}>
            {cells[cell]}
        </td>
    )
}

const Board = ({cells,onClick,isActive}) => {

    const renderSquare = (cell) => {
        return <Square cell={cell} onClick={onClick} isActive={isActive} cells={cells} />
    }

    return (
        <table id="board">
            <tbody>
                <tr>
                    {renderSquare(0)}
                    {renderSquare(1)}
                    {renderSquare(2)}
                </tr>
                <tr>
                    {renderSquare(3)}
                    {renderSquare(4)}
                    {renderSquare(5)}
                </tr>
                <tr>
                    {renderSquare(6)}
                    {renderSquare(7)}
                    {renderSquare(8)}
                </tr>
            </tbody>
        </table>
    )
}

export default Board