export default function Proplayout({
    box1,
    box2,
    box3,
    box4,
    box5,
}: any) {
    return(
        <div className="flex w-full">
                <div className="grid h-20 flex-grow card bg-base-300 rounded-box place-items-center">
                    <div className="flex flex-col w-full">
                        <div className="grid h-20 card bg-base-300 rounded-box place-items-center">
                        {box1}
                        </div>

                        <div className="divider">
                        </div>

                        <div className="grid h-20 card bg-base-300 rounded-box place-items-center">
                        {box2}
                        </div>
                         
                        <div className="divider">
                        </div>

                        <div className="grid h-20 card bg-base-300 rounded-box place-items-center">
                        {box3}
                        </div>
                    </div>
                </div>

                <div className="divider divider-horizontal">

                </div>

                <div className="grid h-20 flex-grow card bg-base-300 rounded-box place-items-center">
                    <div className="grid h-20 card bg-base-300 rounded-box place-items-center">
                            {box4}
                            </div>
                            
                            <div className="divider">
                            </div>

                            <div className="grid h-20 card bg-base-300 rounded-box place-items-center">
                            {box5}
                            </div>
                    </div>
                </div>
    )
}