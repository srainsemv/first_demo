import {Component} from "react";

const navigation = {
    ownership: [
        { name: 'Warranty', href: '#' },
        { name: 'Owner\'s Manual', href: '#' },
        { name: 'Emergency Responders Guide', href: '#' },
        { name: 'Service', href: '#' },
        { name: 'Recalls', href: '#' },
    ],
    purchasing: [
        { name: 'Incentives', href: '#' },
        { name: 'SOLO', href: '#' },
        { name: 'Concept Vehicles', href: '#' },
        { name: 'FAQ', href: '#' },
    ],
    about: [
        { name: 'Out Story', href: '#' },
        { name: 'Newsroom', href: '#' },
        { name: 'careers', href: '#' },
    ],
    contact: [
        { name: 'Get in Touch', href: '#' },
        { name: 'Investors', href: '#' },
        { name: 'Find a Location', href: '#' },
    ]
}

class Footer extends Component<any, any> {
    render() {
        return (
            <footer className="bg-blue-600" aria-labelledby="footer-heading">
                <div className="mx-auto max-w-screen-2xl py-12 px-4 sm:px-6 lg:py-28 lg:px-8 text-left">
                    <div className="mt-12 grid grid-cols-2 gap-8 xl:col-span-2 xl:mt-0">
                        <div className="md:grid md:grid-cols-2 md:gap-8">
                            <div>
                                <h3 className="text-4xl font-medium text-white pb-6 uppercase">Ownership</h3>
                                <ul role="list" className="mt-4 space-y-4">
                                    {navigation.ownership.map((item) => (
                                        <li key={item.name}>
                                            <a href={item.href} className="text-xl text-gray-100 hover:text-gray-300">
                                                {item.name}
                                            </a>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                            <div className="mt-12 md:mt-0">
                                <h3 className="text-4xl font-medium text-white pb-6 uppercase">Purchasing</h3>
                                <ul role="list" className="mt-4 space-y-4">
                                    {navigation.purchasing.map((item) => (
                                        <li key={item.name}>
                                            <a href={item.href} className="text-xl text-gray-100 hover:text-gray-300">
                                                {item.name}
                                            </a>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                        <div className="md:grid md:grid-cols-2 md:gap-8">
                            <div>
                                <h3 className="text-4xl font-medium text-white pb-6 uppercase">About</h3>
                                <ul role="list" className="mt-4 space-y-4">
                                    {navigation.about.map((item) => (
                                        <li key={item.name}>
                                            <a href={item.href} className="text-xl text-gray-100 hover:text-gray-300">
                                                {item.name}
                                            </a>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                            <div className="mt-12 md:mt-0">
                                <h3 className="text-4xl font-medium text-white pb-6 uppercase">Contact</h3>
                                <ul role="list" className="mt-4 space-y-4">
                                    {navigation.contact.map((item) => (
                                        <li key={item.name}>
                                            <a href={item.href} className="text-xl text-gray-100 hover:text-gray-300">
                                                {item.name}
                                            </a>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    </div>

                    <div className="pt-32 grid grid-cols-1 md:grid-cols-2 gap-4 lg:flex lg:items-center lg:justify-between xl:mt-0">
                        <div className={""}>
                            <img
                                src={"/logos/logo.svg"}
                            />
                        </div>
                        <div className={"text-right"}>
                            <a className="text-4xl font-medium text-white">
                                888-457-SOLO
                            </a>
                            <div className="mt-2 flex space-x-8 md:order-2 text-center md:text-right">
                                <a href={"#"} className="text-white hover:text-gray-200">
                                    <span className="">Terms of Use</span>
                                </a>
                                <a href={"#"} className="text-white hover:text-gray-200">
                                    <span className="">Privacy Policy</span>
                                </a>
                                <p className="text-white">&copy; 2022 Electra Meccanica. All Rights Reserved.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
        )
    }
}

export default Footer