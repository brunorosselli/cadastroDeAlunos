import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';
import { AlunoModel } from '../interfaces/aluno-model';
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';
@Injectable({
  providedIn: 'root'
})
export class AlunosService {

  apiUrl = "http://localhost:3000"

  constructor(private http: HttpClient) { }
  
  removerAluno(id: any): Observable<any>{
    return this.http.delete(`${this.apiUrl}/alunos/`.concat(id));
  }

  atualizarAluno(id: any, aluno: AlunoModel): Observable<any> {
    return this.http.put(`${this.apiUrl}/alunos/`.concat(id), aluno);
  }

  listarAlunos(): Observable<any>{
    return this.http.get(`${this.apiUrl}/alunos`);
  }

  cadastrarAluno(aluno: AlunoModel): Observable<any>{
    return this.http.post(`${this.apiUrl}/alunos`, aluno);
  }

}
