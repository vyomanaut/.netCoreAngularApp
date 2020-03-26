import { Component, OnInit } from '@angular/core';
import {HttpClientModule, HttpClient} from '@angular/common/http';
import { error } from '@angular/compiler/src/util';

@Component({
  selector: 'app-value',
  templateUrl: './value.component.html',
  styleUrls: ['./value.component.css']
})
export class ValueComponent implements OnInit {
  Values:any;

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.getvalues();
  }

  getvalues(){
    this.http.get('https://localhost:44377/value').subscribe(Response =>{
      this.Values = Response;
    }, error =>{
      console.log('error');
    }
    );

}}
