import { Component, OnInit } from '@angular/core';
import { Item } from '../shared/item.model';
import { ActivatedRoute, Router } from '@angular/router';
import { ItemService } from '../shared/item.service';

@Component({
  selector: 'app-item-edit',
  templateUrl: './item-edit.component.html',
  styleUrls: ['./item-edit.component.css']
})
export class ItemEditComponent implements OnInit {
  item: Item;

  constructor(private service: ItemService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      const id = <number>params['id'];
      if (id != null) {
          this.service.getItem(id).subscribe(
            (data: Item) => this.item = data,
            error => console.error(error),
            () => console.log('Item data loaded!')
          );
      }
    });
  }

  save() {
    this.service.updateItem(this.item).subscribe(
      () => {
        console.log('Item updated!');
        this.router.navigate(['/home']);
      }
    );
  }
}
