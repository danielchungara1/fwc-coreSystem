import {AfterViewChecked, Component, Input, OnInit} from '@angular/core';
import {PageEvent} from '@angular/material/paginator';
import {CrudService} from '@core/services/crud/crud.service';
import {ResultSearch} from '@core/interfaces/result-search';

@Component({
  selector: 'app-paginator',
  templateUrl: './paginator.component.html',
  styleUrls: ['./paginator.component.scss']
})
export class PaginatorComponent<T> implements OnInit, AfterViewChecked {

  @Input()
  crudService: CrudService<T>;

  resultSearch: ResultSearch<T>;

  constructor() {
  }

  ngOnInit(): void {
    this.crudService.$resultSearch.subscribe(
      (resultSearch: ResultSearch<T>) => {
        this.resultSearch = resultSearch;
      }
    );
  }

  pageChange($event: PageEvent): void {
    this.crudService.searchAndEmit(this.resultSearch.searchText, $event.pageIndex);
  }

  ngAfterViewChecked(): void {
    const list = document.getElementsByClassName('mat-paginator-range-label');

    if (list.length > 0) {
      list[0].innerHTML = 'Total Results ' + this.resultSearch?.page?.totalElements;
    }

  }

}
