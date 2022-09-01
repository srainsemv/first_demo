import {Component} from "react";

class MeetSolo extends Component<any, any> {
    render() {
        return (
            <>
                <div className="flex flex-col p-5 w-full h-screen bg-black">
                    <div className="p-10 w-full bg-rose-500">Some content</div>
                    <div className="p-10 w-full bg-green-500">Some content</div>
                    <div className="p-10 mt-auto w-full bg-amber-300">Bottom</div>
                </div>
            </>
        )
    }
}

export default MeetSolo