import React, {useEffect} from 'react';
import ShallowRenderer from 'react-test-renderer/shallow';
import { act, create} from 'react-test-renderer';
// import { render, unmountComponentAtNode } from "react-dom";
// import { act } from "react-dom/test-utils";
import MovieList from '..';

const mockMovieListProps = {
  items: [{
    id: 2412412,
    title: 'Fight club',
    genres: ['drama', 'sport', 'comedy'],
    vote_average: 8,
    poster: 'image_path',
    overview: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry',
  },
  {
    id: 41412,
    title: 'Sopranos',
    genres: ['drama', 'Criminal', 'comedy'],
    vote_average: 10,
    poster: 'image_path',
    overview: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry',
  }],
  video: 'youtube-link',
  genres: [{
    id: 13,
    name: 'Adventure',
  }, {
    id: 18,
    name: 'Drama',
  }, {
    id: 20,
    name: 'Family',
  }, {
    id: 21,
    name: 'Fantasy',
  }],
  isLoading: true,
  filter: 'TRENDING',
  page: 1,
  total_pages: 20,
  searchValue: '',
  isRow: true,
  genre: 'Drama',
  handleVideo: jest.fn(),
  getDetails: jest.fn(),
  getContent: jest.fn(),
  GetGenres: jest.fn(),
  setFilter: jest.fn(),
  setCurrentPage: jest.fn(),
  setGenre: jest.fn(),
  setListFlexDirection: jest.fn()
};

let cleanupFunc;

const useeffect = jest.spyOn(React, "useEffect").mockImplementationOnce(func => {
    cleanupFunc = func();
});
describe('test MovieList component', () => {

   let component
  it('should render MovieList component', () => {
    component = create(
          <MovieList
            items={mockMovieListProps.items}
            video={mockMovieListProps.video}
            genres={mockMovieListProps.genres}
            isLoading={mockMovieListProps.isLoading}
            filter={mockMovieListProps.filter}
            page={mockMovieListProps.page}
            total_pages={mockMovieListProps.total_pages}
            searchValue={mockMovieListProps.searchValue}
            isRow={mockMovieListProps.isRow}
            genre={mockMovieListProps.genre}
            handleVideo={mockMovieListProps.handleVideo}
            getDetails={mockMovieListProps.getDetails}
            getContent={mockMovieListProps.getContent}
            GetGenres={mockMovieListProps.GetGenres}
            setFilter={mockMovieListProps.setFilter}
            setCurrentPage={mockMovieListProps.setCurrentPage}
            setGenre={mockMovieListProps.setGenre}
            setListFlexDirection={mockMovieListProps.setListFlexDirection}
          />,);
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });



  // it('should handle handleColumn from columns-btn', () => {
  //   const useStateSpy = jest.spyOn(React, 'useState').mockImplementation(initState => [initState, jest.fn()]);
  //   const { root } = component;
  //   const clickable = root.findByProps({ className: 'columns-btn' });
  //   clickable.props.onClick();
  //   const tree = component.toJSON();
  //   expect(tree).toMatchSnapshot();
  // });

  // it('should handle change filter', () => {
  //   const { root } = component;
  //   const clickable = root.findAllByProps({ className: 'ant-tabs-tab' })[1];
  //   console.dir(clickable);
  //   clickable.props.onClick();
  //   const tree = component.toJSON();
  //   expect(useeffect).toBeCalled();
  // });

  // it("changes value when clicked", () => {
  //   let container = null;
  //   container = document.createElement("div");
  //   document.body.appendChild(container);
  //   const onChange = jest.fn();
  //   act(() => {
  //     render(
  //       <BrowserRouter>
  //       <MovieList
  //         items={mockMovieListProps.items}
  //         video={mockMovieListProps.video}
  //         genres={mockMovieListProps.genres}
  //         isLoading={mockMovieListProps.isLoading}
  //         filter={mockMovieListProps.filter}
  //         page={mockMovieListProps.page}
  //         total_pages={mockMovieListProps.total_pages}
  //         searchValue={mockMovieListProps.searchValue}
  //         isRow={mockMovieListProps.isRow}
  //         genre={mockMovieListProps.genre}
  //         handleVideo={mockMovieListProps.handleVideo}
  //         getDetails={mockMovieListProps.getDetails}
  //         getContent={mockMovieListProps.getContent}
  //         GetGenres={mockMovieListProps.GetGenres}
  //         setFilter={mockMovieListProps.setFilter}
  //         setCurrentPage={mockMovieListProps.setCurrentPage}
  //         setGenre={mockMovieListProps.setGenre}
  //         setListFlexDirection={mockMovieListProps.setListFlexDirection}
  //       />
  //     </BrowserRouter>
  //     , container);
  //   });
  
  //   // get a hold of the button element, and trigger some clicks on it
  //   const button = document.querySelectorAll(".ant-tabs-tab")[0];
     
  //   act(() => {
  //     button.dispatchEvent(new MouseEvent("click", { bubbles: true }));
  //   });
  
  //   expect(useeffect).toHaveBeenCalledTimes(1);
    
  //   });

  // it('should render MovieDetailsPage component', () => {
  //   const renderer = new ShallowRenderer();
  //   let result;
  //   act(() => {
  //     result = renderer.render(
  //       <BrowserRouter>
  //       <MovieList
  //         items={mockMovieListProps.items}
  //         video={mockMovieListProps.video}
  //         genres={mockMovieListProps.genres}
  //         isInitialisated={mockMovieListProps.isInitialisated}
  //         isLoading={mockMovieListProps.isLoading}
  //         filter={mockMovieListProps.filter}
  //         page={mockMovieListProps.page}
  //         total_pages={mockMovieListProps.total_pages}
  //         searchValue={mockMovieListProps.searchValue}
  //         isRow={mockMovieListProps.isRow}
  //         genre={mockMovieListProps.genre}
  //         handleVideo={mockMovieListProps.handleVideo}
  //         getDetails={mockMovieListProps.getDetails}
  //         getContent={mockMovieListProps.getContent}
  //         getInitialisated={mockMovieListProps.getInitialisated}
  //         GetGenres={mockMovieListProps.GetGenres}
  //         setFilter={mockMovieListProps.setFilter}
  //         setCurrentPage={mockMovieListProps.setCurrentPage}
  //         setGenre={mockMovieListProps.setGenre}
  //         setListFlexDirection={mockMovieListProps.setListFlexDirection}
  //       />
  //     </BrowserRouter>,
  //     );
  //   });
  //   expect(result).toMatchSnapshot();
  // });
});
