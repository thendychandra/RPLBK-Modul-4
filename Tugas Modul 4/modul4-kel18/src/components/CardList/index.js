import React, { Component } from "react";
export default class CardList extends Component {
  componentWillUnmount() {
    alert("Closed...");
  }
  render() {
    return (
      <div className="shadow">
        <div className="max-w-2x1 mx-auto py-8 px-4 sm:py-8 sm:px-6 lg:max-w-7xl lg:px-8">
          <h2 className="text-2x1 font-extrabold tracking-tight text-gray-900">
            Daftar Praktikan RPLBK 2021
          </h2>
          <div class="grid grid-cols-1 gap-6 xl:grid-cols-3 sm:grid-cols-2 lg:grid-cols-3">
            {this.props.contacts.map((contact, index) => (
              <div className="mt-6 grid">
                <div className="group relative shadow">
                  <div className="w-full min-h-80 bg-gray-200 aspect-w-1 aspect-h-1 rounded-md overflow-hidden group-hover:opacity-75 lg:h-80 sm:h-80 lg:aspect-none">
                    <img
                      src={contact.avatar}
                      className="w-full h-full object-center object-cover lg:w-full lg:h-full"
                      alt="avatar"
                    />
                  </div>
                  <div className="px-6 pb-6 pt-3 mt-4 flex justify-between">
                    <div>
                      <h3
                        className={`${
                          this.props.isNameBold ? "font-bold " : ""
                        } text-sm text-gray-700`}
                      >
                        <span aria-hidden="true" className="absolute inset-0" />
                        {contact.first_name} {contact.last_name}
                      </h3>
                      <p className="mt-1 text-sm text-gray-500">
                        {contact.email}
                      </p>
                    </div>
                    <p className="text-sm font-medium text-gray-900">
                      Kelompok : {contact.id}
                    </p>
                  </div>
                  <p className="px-6 pb-2 text-sm font-medium text-gray-900">
                    # {this.props.quotes[index].quote} #
                  </p>
                  <p className="px-6 pb-6 text-sm font-medium text-gray-900">
                    - {this.props.quotes[index].author} -
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }
}