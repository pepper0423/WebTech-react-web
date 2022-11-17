import React from "react";
import { FaAddressCard } from 'react-icons/fa';

const FormContact = () => {
  const form = document.getElementById("form");
  const result = document.getElementById("result");
  if (!!form) {
    form.addEventListener("submit", function (e) {
      const formData = new FormData(form);
      e.preventDefault();
      var object = {};
      formData.forEach((value, key) => {
        object[key] = value;
      });
      var json = JSON.stringify(object);
      result.innerHTML = "Please wait...";
  
      fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: json,
      })
        .then(async (response) => {
          let json = await response.json();
          if (response.status == 200) {
            result.innerHTML = json.message;
            result.classList.remove("text-gray-500");
            result.classList.add("text-green-500");
          } else {
            console.log(response);
            result.innerHTML = json.message;
            result.classList.remove("text-gray-500");
            result.classList.add("text-red-500");
          }
        })
        .catch((error) => {
          console.log(error);
          result.innerHTML = "Something went wrong!";
        })
        .then(function () {
          form.reset();
          setTimeout(() => {
            result.style.display = "none";
          }, 5000);
        });
    });
  }
  return (
    <div className="flex items-center min-h-screen bg-netflix-black">
      <div className="container mx-auto">
        <div className="max-w-md mx-auto my-10 bg-white p-5 rounded-md shadow-sm">
          <div className="text-center">
            <h1 className="my-3 text-3xl font-semibold text-gray-800"><FaAddressCard/>
              ติดต่อพวกเรา
            </h1>
            <p className="text-gray-600">
              กรอกแบบฟอร์มข้างล่างเพื่อส่งข้อความถึงเรา
            </p>
          </div>
          <div className="m-7">
            <form
              action="https://api.web3forms.com/submit"
              method="POST"
              id="form"
            >
              <input
                type="hidden"
                name="access_key"
                value="YOUR_ACCESS_KEY_HERE"
              />
              <input
                type="hidden"
                name="subject"
                value="New Submission from Web3Forms"
              />
              <input
                type="checkbox"
                name="botcheck"
                id=""
                style={{display: "none" }}
              />

              <div className="mb-6">
                <label
                  htmlFor="name"
                  className="block mb-2 text-sm text-gray-600"
                >
                  ชื่อ
                </label>
                <input type="text"
                  name="name"
                  id="name"
                  placeholder="John Doe"
                  required
                  className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring  text-white placeholder-gray-300 border-gray-200 focus:ring-gray-300 focus:border-gray-300"
                />
              </div>
              <div className="mb-6">
                <label
                  htmlFor="email"
                  className="block mb-2 text-sm text-gray-600"
                >
                  ที่อยู่อีเมล
                </label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  placeholder="you@company.com"
                  required
                  className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring  text-white placeholder-gray-300 border-gray-200 focus:ring-gray-300 focus:border-gray-300"
                />
              </div>
              <div className="mb-6">
                <label
                  htmlFor="phone"
                  className="text-sm text-gray-600"
                >
                  เบอร์โทรศัพท์
                </label>
                <input
                  type="text"
                  name="phone"
                  id="phone"
                  placeholder="+66 XX-XXX-XXXX"
                  required
                  className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring  text-white placeholder-gray-300 border-gray-200 focus:ring-gray-300 focus:border-gray-300"
                />
              </div>
              <div className="mb-6">
                <label
                  htmlFor="message"
                  className="block mb-2 text-sm text-gray-600 "
                >
                  ข้อความ
                </label>

                <textarea
                  rows="5"
                  name="message"
                  id="message"
                  placeholder="Your Message"
                  className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring  text-white placeholder-gray-300 border-gray-200 focus:ring-gray-300 focus:border-gray-300"
                  required
                ></textarea>
              </div>
              <div className="mb-6">
                <button
                  type="submit"
                  className="w-full px-3 py-4 text-white bg-red-500 rounded-md focus:bg-red-600 focus:outline-none"
                >
                  ส่งข้อความ
                </button>
              </div>
              <p className="text-base text-center text-gray-400" id="result"></p>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};
export default FormContact;
