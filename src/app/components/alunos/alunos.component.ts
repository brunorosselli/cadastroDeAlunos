import { Component, OnInit } from '@angular/core';
import { AlunosService } from 'src/app/services/alunos.service';
import { AlunoModel } from '../../interfaces/aluno-model';


@Component({
  selector: 'app-alunos',
  templateUrl: './alunos.component.html',
  styleUrls: ['./alunos.component.css']
})
export class AlunosComponent implements OnInit {

  aluno: AlunoModel = new AlunoModel();
  alunos: Array<any> = new Array();

  constructor(private alunosService: AlunosService) { 
    this.listarAlunos();
  }

  ngOnInit(): void {
  }

  atualizar(id: number){
    this.alunosService.atualizarAluno(id, this.aluno)
    .subscribe(aluno => {
      this.aluno = new AlunoModel();
      this.listarAlunos();
    },
    () => {
      alert('Falha ao Atualizar Aluno!');
    });
  }

  remover(id: number){
    this.alunosService.removerAluno(id)
    .subscribe( 
      () => { alert('Aluno Removido com Sucesso!');
      this.listarAlunos(); },
      () => { alert('Falha ao Remover Aluno!'); }
    );
  }

  cadastrar(){
    this.alunosService.cadastrarAluno(this.aluno)
    .subscribe(aluno => {
      this.aluno = new AlunoModel();
      this.listarAlunos();
    },
    () => {
      alert('Erro ao Cadastrar Aluno!');
    } );
  }

  listarAlunos(){
    this.alunosService.listarAlunos()
    .subscribe( alunos => {
      this.alunos = alunos;
    },
      () => {alert('Falha ao Listar Alunos!');})
  }
}
