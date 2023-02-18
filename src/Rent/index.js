import { Component } from "react";
import { format, parseISO } from "date-fns";
import RentItem from "../RentItem";

import "./index.css";

const list = [
  {
    id: 1,
    imageUrl:
      "https://img.freepik.com/free-photo/3d-electric-car-building_23-2148972401.jpg?w=1060&t=st=1676577508~exp=1676578108~hmac=479a835ba25039c337fcae6531c9eb2938f40e7c466e510fda46c80e8e479752",
    location: "Beverly Springfield",
    address: "2821 Lake Sevilla,Palm Harvor,Texas",
    bedroom: 2,
    bathroom: 2,
    area: "5x7m",
    price: "2,300",
    isFavorite: false,
    type: "house",
    availableFrom: "07/21/2023",
  },
  {
    id: 2,
    imageUrl:
      "https://images.unsplash.com/photo-1592595896551-12b371d546d5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
    location: "Branson",
    address: "4458 Lighthouse Drive,Missouri",
    bedroom: 3,
    bathroom: 4,
    area: "9x7m",
    price: "4,300",
    isFavorite: false,
    type: "house",
    availableFrom: "01/01/2023",
  },
  {
    id: 3,
    imageUrl:
      "https://images.unsplash.com/photo-1558036117-15d82a90b9b1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
    location: "Frostproof",
    address: "4377 Ethels Lane,Florida",
    bedroom: 5,
    bathroom: 6,
    area: "2x5m",
    price: "9,700",
    isFavorite: false,
    type: "house",
    availableFrom: "12/21/2022",
  },
  {
    id: 4,
    imageUrl:
      "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
    location: "Northbrook",
    address: " 1563 Walkers Ridge Way,Illinois",
    bedroom: 2,
    bathroom: 2,
    area: "5x7m",
    price: "2,700",
    isFavorite: false,
    type: "house",
    availableFrom: "11/02/2023",
  },
  {
    id: 5,
    imageUrl:
      "https://images.unsplash.com/photo-1570129477492-45c003edd2be?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
    location: "New York",
    address: "1467 Hanover Street,New York",
    bedroom: 4,
    bathroom: 5,
    area: "8x7m",
    price: "5,000",
    isFavorite: false,
    type: "house",
    availableFrom: "08/02/2023",
  },
  {
    id: 6,
    imageUrl:
      "https://images.unsplash.com/photo-1613977257363-707ba9348227?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80",
    location: "Avant",
    address: " 3662 Henry Ford Avenue,Oklahoma",
    bedroom: 3,
    bathroom: 3,
    area: "6x9m",
    price: "3,300",
    isFavorite: false,
    type: "house",
    availableFrom: "07/22/2023",
  },
  {
    id: 7,
    imageUrl:
      "https://images.unsplash.com/photo-1628624747186-a941c476b7ef?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
    location: "San Francisco",
    address: "3202 Locust View Drive,California",
    bedroom: 2,
    bathroom: 2,
    area: "5x7m",
    price: "2,300",
    isFavorite: false,
    type: "house",
    availableFrom: "12/09/2023",
  },
  {
    id: 9,
    imageUrl:
      "https://images.unsplash.com/photo-1602343168117-bb8ffe3e2e9f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=425&q=80",
    location: "Greenfield",
    address: "4595 Nuzum Court,New York",
    area: "7x12m",
    price: "8,000",
    isFavorite: false,
    type: "commercial",
    availableFrom: "01/05/2023",
  },
  {
    id: 10,
    imageUrl:
      "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80",
    location: "Millwood",
    address: "750 Sun Valley Road,Washington",
    area: "12x7m",
    price: "7,000",
    isFavorite: false,
    type: "commercial",
    availableFrom: "03/21/2023",
  },
  {
    id: 11,
    imageUrl:
      "https://images.unsplash.com/photo-1638766861788-807789e1cea3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1332&q=80",
    location: "Blue Mountain",
    address: "1746 Rafe Lane,Mississippi",
    area: "8x7m",
    price: "6,500",
    isFavorite: false,
    type: "commercial",
    availableFrom: "11/04/2022",
  },
  {
    id: 12,
    imageUrl:
      "https://images.unsplash.com/photo-1464938050520-ef2270bb8ce8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1174&q=80",
    location: "Largo",
    address: "10801 Starkey Rd #105,Florida",
    area: "13x6m",
    price: "9,500",
    isFavorite: false,
    type: "commercial",
    availableFrom: "07/17/2021",
  },
  {
    id: 13,
    imageUrl:
      "https://images.unsplash.com/photo-1542361345-89e58247f2d5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
    location: "South Fallsburg",
    address: "Po Box 422,New York",
    area: "15x7m",
    price: "10,000",
    isFavorite: false,
    type: "commercial",
    availableFrom: "08/21/2024",
  },
  {
    id: 14,
    imageUrl:
      "https://images.unsplash.com/photo-1542361345-89e58247f2d5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
    location: "Daly City",
    address: " 15 Oakridge Dr Road,California",
    area: "15x7m",
    price: "10,000",
    isFavorite: false,
    type: "commercial",
    availableFrom: "01/06/2023",
  },
  {
    id: 15,
    imageUrl:
      "https://images.unsplash.com/photo-1550136513-548af4445338?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1174&q=80",
    location: "Millwood",
    address: "750 Sun Valley Road,Washington",
    area: "11x7m",
    price: "9,500",
    isFavorite: false,
    type: "commercial",
    availableFrom: "12/31/2019",
  },
  {
    id: 16,
    imageUrl:
      "https://images.unsplash.com/photo-1576731753569-3e93a228048c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1887&q=80",
    location: "Venice",
    address: "15 Horizon Ave #APT 14,California",
    area: "9x7m",
    price: "7,000",
    isFavorite: false,
    type: "commercial",
    availableFrom: "07/18/2023",
  },
  {
    id: 17,
    imageUrl:
      "https://images.unsplash.com/photo-1550510537-89d5433de5cb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80",
    location: " West Chazy",
    address: " 489 State 22 Rte,New York",
    area: "7x8m",
    price: "5,000",
    isFavorite: false,
    type: "commercial",
    availableFrom: "02/18/2023",
  },

  {
    id: 18,
    imageUrl:
      "https://images.unsplash.com/photo-1586859821397-c81e4971ca82?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1825&q=80",
    location: "Detroit",
    address: "2281 Tully Street,Michigan",
    area: "15x18m",
    price: "10,500",
    isFavorite: false,
    type: "plot",
    availableFrom: "11/07/2023",
  },
  {
    id: 19,
    imageUrl:
      "https://images.unsplash.com/photo-1559585888-6b01c8ea796b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2094&q=80",
    location: " West Chazy",
    address: " 7829 State 22 Rte,New York",
    area: "7x8m",
    price: "6,500",
    isFavorite: false,
    type: "plot",
    availableFrom: "08/01/2022",
  },
  {
    id: 20,
    imageUrl:
      "https://images.unsplash.com/photo-1625878499209-b664c3e138fa?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
    location: " West Chazy",
    address: " 7829 State 22 Rte,New York",
    area: "11x9m",
    price: "7,000",
    isFavorite: false,
    type: "plot",
    availableFrom: "07/30/2022",
  },
  {
    id: 21,
    imageUrl:
      "https://images.unsplash.com/photo-1620136908510-e6c64a920aa2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1171&q=80",
    location: "Cooperstown",
    address: "2099 Locust Court,Pennsylvania",
    area: "8x7m",
    price: "6,500",
    isFavorite: false,
    type: "plot",
    availableFrom: "05/15/2023",
  },
  {
    id: 22,
    imageUrl:
      "https://images.unsplash.com/photo-1625878455877-490d9ca17740?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8ODN8fHBsb3R8ZW58MHx8MHx8&auto=format&fit=crop&w=400&q=60",
    location: "Olympia",
    address: " 4131 Pratt Avenue,Washington",
    area: "12x11m",
    price: "7,000",
    isFavorite: false,
    type: "plot",
    availableFrom: "04/28/2022",
  },
  {
    id: 23,
    imageUrl:
      "https://images.unsplash.com/photo-1573850107183-fc98954034a7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2071&q=80",
    location: "Mcbh Kaneohe Bay",
    address: "509 Hart Street,Hawaii",
    area: "6x8m",
    price: "8,000",
    isFavorite: false,
    type: "plot",
    availableFrom: "09/07/2023",
  },
];

class Rent extends Component {
  state = {
    type: "all",
    price1: 500,
    price2: 2500,
    locationNew: "",
    dateInput: "",
    filteredList: list,
  };

  isFavoriteId = (id) => {
    this.setState((prevState) => ({
      filteredList: prevState.filteredList.map((each) => {
        if (id === each.id) {
          return { ...each, isFavorite: !each.isFavorite };
        }
        return each;
      }),
    }));
  };

  newElement = () => {
    const newArr1 = list.map((v) => ({
      ...v,
      newPrice: parseInt(v.price.replace(",", "")),
    }));
    return newArr1;
  };

  getSearchInput = (event) => {
    const { filteredList } = this.state;
    this.setState({
      filteredList: filteredList.filter((each) =>
        each.address.toLowerCase().includes(event.target.value.toLowerCase())
      ),
    });
  };

  getDate = (event) => {
    const { dateInput } = this.setState;
    const date1 = parseISO(event.target.value);
    const formatedDate = format(date1, "MM/dd/yyyy");
    this.setState({ dateInput: formatedDate });
    //   console.log(formatedDate1);
    // const dateFilteredList = list.filter((each) => {
    //   const data1 = new Date(each.availableFrom);
    //   const formatedDate = data1.toLocaleDateString();
    // const fD = format(data1, "dd/MM/yyyy");
    //   if (formatedDate < formatedDate1) {
    //     return formatedDate;
    //   }
    //   return "";
    // });
    // console.log(dateFilteredList);
    //   this.setState({ filteredList: dateFilteredList });
  };
  getPrice = (event) => {
    // const n = list[0].price.replace(",", "");
    if (event.target.value === "all") {
      this.setState({ price1: "all" });
    } else {
      const newValue = event.target.value.split("-");
      const value1 = parseInt(newValue[0]);
      const value2 = parseInt(newValue[1]);
      this.setState({ price1: value1, price2: value2 });
    }
  };
  getLocation = (event) => {
    this.setState({ locationNew: event.target.value });
  };
  getPropertyType = (event) => {
    const { type } = this.state;
    this.setState({ type: event.target.value });
  };
  newForm = () => {
    const { type, price1, price2, locationNew, dateInput } = this.state;
    const newList1 = this.newElement();

    const filterLocation = (each) => {
      return each.address.toLowerCase().includes(locationNew.toLowerCase());
    };
    const filterType = (each) => {
      if (type === "all") {
        return list;
      }
      return each.type === type;
    };

    const filterPrice = (each) => {
      if (price1 === "all") {
        return each;
      }
      return each.newPrice >= price1 && each.newPrice <= price2;
    };

    const filterDate = (each) => {
      const data1 = new Date(each.availableFrom);
      // const formatedDate1 = data1.toLocaleDateString();
      const formatedDate2 = format(data1, "dd/MM/yyyy");
      // console.log(formatedDate2);
      return formatedDate2 < dateInput;
    };

    const newList = newList1
      .filter(filterLocation)
      .filter(filterType)
      .filter(filterPrice)
      .filter(filterDate);
    return newList;
  };

  submitForm = (event) => {
    event.preventDefault();
    const newList = this.newForm();
    console.log(newList);
    this.setState({ filteredList: newList });
  };

  render() {
    const { filteredList, locationNew, dateInput } = this.state;
    console.log(dateInput);
    return (
      <div className="rent-background">
        <div className="rent-items-container">
          <div className="heading-searchbar-container">
            <h1 className="rent-heading">Search properties to rent</h1>
            <div className="search-container">
              <input
                type="text"
                className="search-input"
                placeholder="Search With Search Bar"
                onChange={this.getSearchInput}
              />
              <button type="button" className="search-dropdown-btn">
                <img
                  src="https://cdn-icons-png.flaticon.com/512/5436/5436702.png"
                  alt="search"
                  className="search-dropdown-image"
                />
              </button>
            </div>
          </div>
          <form className="filters-container" onSubmit={this.submitForm}>
            <div className="filter">
              <label htmlFor="text" className="loaction-heading">
                Loaction
              </label>
              <input
                type="text"
                placeholder="New York,USA"
                id="text"
                className="input"
                onChange={this.getLocation}
              />
            </div>
            <div className="filter">
              <label htmlFor="date">When</label>
              <div className="date-folder">
                <p className="date">Select Move-in Date</p>
                <input
                  type="date"
                  id="date"
                  onChange={this.getDate}
                  placeholder="Select Move-in Date"
                  className="input2"
                />
              </div>
            </div>
            <div className="filter">
              <label htmlFor="price">Price</label>
              <select id="price" className="input" onChange={this.getPrice}>
                <option value="all">All</option>
                <option value="500-2500">$500-$2,500</option>
                <option value="2500-5000">$2,500-$5,000</option>
                <option value="5000-10000">$5,000-$10,000</option>
                <option value="10000-15000">$10,000-$15,000</option>
              </select>
            </div>
            <div className="filter">
              <label htmlFor="property">Property Type</label>
              <select
                id="property"
                className="input"
                onChange={this.getPropertyType}
              >
                <option value="all">All</option>
                <option value="house">Houses</option>
                <option value="plot">Plots</option>
                <option value="commercial">Commercial</option>
              </select>
            </div>
            <div className="submit-button-container">
              <button type="submit" className="submit-btn">
                Submit
              </button>
            </div>
          </form>

          <div className="rent-data-container">
            <ul>
              {filteredList.map((each) => (
                <RentItem rentItem={each} isFavoriteId={this.isFavoriteId} />
              ))}
            </ul>
          </div>
        </div>
      </div>
    );
  }
}

export default Rent;
